import 'react-native-gesture-handler';
import 'array-flat-polyfill';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RNBootSplash from 'react-native-bootsplash';
import {RootSiblingParent} from 'react-native-root-siblings';


import MyApp from './src/MyApp';

import {store, persistor} from './src/Redux/Store';

const App: React.FC = () => {
  useEffect(() => {
    const init = async (): Promise<void> => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);
  // useEffect(() => {
  //   // Track screen view
  //   analytics().setAnalyticsCollectionEnabled(true);
  //   console.log('jj');
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootSiblingParent>
            <MyApp />
          </RootSiblingParent>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
