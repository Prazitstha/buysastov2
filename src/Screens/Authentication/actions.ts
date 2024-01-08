import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

import {Api,Colors} from '../../Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';


const showRemoveToast = (message: string, color: string) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: Colors.main_color,
    // textStyle: styles(user.fontScale).toastText,
  });
};
const showAddToast = (message: string, color: string) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: Colors.secondary_color,
    // textStyle: styles(user.fontScale).toastText,
  });
};

const updateWishList = createAsyncThunk(
  'user/updateWishList',
  async (params, {rejectWithValue, dispatch}) => {
    console.log('wishlist', params.id, params.wishList);
  
    if(params.id === null) {
      try {
      const res = await Api.fetchWishList();

      return res.bookmarks;
      }
      catch (error) {
        return rejectWithValue(error.response.data);
      }

      
    }
      else {
        try {
          const postData = {
            product_id: params.id,
          };
    
          if (
            params.wishList.some(wishlists => wishlists.product._id === params.id)
          ) {
            await Api.removeWishList(postData);
            showRemoveToast(
              'bookmark removed',
              Colors.text_color,
            );
          } else {
            await Api.addWishList(postData);
            showAddToast(
              'bookmark added',
              Colors.text_color,
    
            );
          }
    
          const res = await Api.fetchWishList();
    
          return res.bookmarks;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      }
    
   
  },
);

// Action creator to perform a login request
const performLogin = createAsyncThunk(
  'user/performLogin',
  async (postData, {rejectWithValue}) => {
    console.log('actionpostData', postData);
    try {
      const res = await Api.postLogin(postData);
      await AsyncStorage.setItem('jwt_token', res.jwt_token);
      return {user: res.user, jwt_token: res.jwt_token};
    } catch (error) {
      console.error('b');
      showRemoveToast(
        error.error,
        Colors.main_color,

      );
      console.error('Error performing login:', error);
      return rejectWithValue(error.error);
    }
  },
);

// Action creator to perform a logout request
const performLogout = createAction('user/performLogout');

// Action creator to perform a updateWishListstate request
const updateWishListstate = createAction('user/updateWishListstate');

const savepoints = createAction('user/savepoints');
const saveusername = createAction('user/saveusername');

export {
  performLogin,
  performLogout,
  savepoints,
  saveusername,
  updateWishList,
  updateWishListstate,
};
