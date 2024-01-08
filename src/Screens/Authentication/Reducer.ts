import {createReducer} from '@reduxjs/toolkit';

import {
  performLogout,
  performLogin,
  savepoints,
  saveusername,
  updateWishList,
  updateWishListstate,

} from './actions';

const initialState = {
  isLoggedIn: false,
  jwt_token: null,
  fcm: null,
  user: {},
  loginError: null,
  islogging: false,
  networkConnected: true,
  points: null,
  username:null,
  WISHLIST: [],
};

const userReducer = createReducer(initialState, builder => {
  builder.addCase(performLogin.pending, (state, action) => {
    state.islogging = true;
  });
  builder.addCase(performLogin.fulfilled, (state, action) => {
    state.isLoggedIn = true;
    state.jwt_token = action.payload.jwt_token;
    state.user = action.payload.user;
    // state.fcm = action.payload.fcm;
    state.loginError = null;
  });
  builder.addCase(performLogin.rejected, (state, action) => {
    state.loginError = action.payload;
  });
  builder.addCase(performLogout, () => initialState);

  builder.addCase(savepoints, (state, action) => {
    state.points = action.payload;
  });

  builder.addCase(saveusername, (state, action) => {
    state.username = action.payload;
  });
  builder.addCase(updateWishList.rejected, (state, action) => {
    console.error('Update wish list failed:', action.error);
    // Update state or handle the error as needed
  });
  builder.addCase(updateWishList.fulfilled, (state, action) => {
    state.WISHLIST = action.payload;
  });
});

export default userReducer;
