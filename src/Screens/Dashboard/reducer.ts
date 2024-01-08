import {createReducer} from '@reduxjs/toolkit';

import {savepoints} from './actions';

const initialState = {
  points: null,
};

const dashboardreducer = createReducer(initialState, builder => {
  builder.addCase(savepoints, (state, action) => {
    state.points = action.payload;
  });
});

export default {dashboardreducer};
