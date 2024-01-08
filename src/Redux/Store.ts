import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCombineReducers, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducers from './Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig,reducers);

const middlewares = [thunk];

if (__DEV__) {
  middlewares.push(createLogger());
}

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [...middlewares],
});

const persistor = persistStore(store);

export {store, persistor};
