import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigationRef, routeNameRef} from '../Routes/AppNavigator';

import HelperFunction from './HelperFunction';

axios.defaults.baseURL = `${HelperFunction.BASE_URL}`;

class Api {
  constructor() {
    this.setValue();
  }

  setValue = () => {
    this.config = {
      'Content-Type': 'application/json',
    };
  };

  getHeaders = async () => {
    const token = await AsyncStorage.getItem('jwt_token');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    // console.log(headers);
    return headers;
  };

  handleError = error => {
    console.log('enter handle error')
    if (error.status === 'token_expired') {
    console.log('enter if handle error')

      navigationRef.current?.navigate('TokenExpiry');
    } else {
    console.log('enter else handle error')

      throw error;
    }
  };

  // get request fetch api data
  getfetchData = async () => {
    try {
      const data = await axios.get('/products', {
        headers: await this.getHeaders(),
      });
      const res = data.data;
      console.log('getfetchData Res:', res);
      return res;
    } catch (e) {
      console.log('getfetchData Error', e.response.data);
      this.handleError(e.response.data);
    }
  };
  // get request fetch api data
  getProductCategory = async () => {
    try {
      const data = await axios.get('/category', {
        headers: await this.getHeaders(),
      });
      const res = data.data;
      console.log('getProductCategory Res:', res);
      return res;
    } catch (e) {
      console.log('getProductCategory Error', e.response.data);
      this.handleError(e.response.data);
    }
  };
  // get request fetch api data( banner image)
  getfetchDataImage = async () => {
    try {
      const data = await axios.get('/resources/banner/mobile/medias', {
        headers: await this.getHeaders(),
      });
      const res = data.data;
      console.log('getfetchDataImage Res:', res);
      return res;
    } catch (e) {
      console.log('getfetchDataImage Error', e.response.data);
      this.handleError(e.response.data);
    }
  };

  //  login post request
  postLogin = async postData => {
    console.log('postLogin postData', postData);
    try {
      const data = await axios.post('/login', postData, {
        headers: this.config,
      });

      const res = data.data;

      console.log('postLogin Res:', res);
      return res;
    } catch (e) {
      console.log('postLogin Error', e.response.data);
      this.handleError(e.response.data);
    }
  };

  postGenerateReferralCode = async postData => {
    console.log('GenerateReferralCode', postData);
    try {
      const data = await axios.post('/addreferralcode', postData, {
        headers: this.config,
      });

      const res = data.data;

      console.log('GenerateReferralCode Res:', res);
      return res;
    } catch (e) {
      console.log('GenerateReferralCode Error', e.response.data);
      this.handleError(e.response.data); // Throw the entire error response
    }
  };

  // patch request profile update
  patchUpdate = async patchData => {
    console.log('patchUpdate', patchData);
    try {
      const data = await axios.patch('/edit', patchData, {
        headers: this.config,
      });

      const res = data.data;

      console.log('patchUpdate Res:', res);
      return res;
    } catch (e) {
      console.log('patchUpdate Error', e.response.data);
      this.handleError(e.response.data);
    }
  };

  // get request ,update profile data
  getUpdateData = async id => {
    try {
      const data = await axios.get(`/users/${id}`, {
        headers: await this.getHeaders(),
      });
      const res = data.data;
      console.log('getUpdateData Res:', res);
      return res;
    } catch (e) {
      console.log('getUpdateData Error', e.response.data);
      this.handleError(e.response.data);
    }
  };
  // get request ,compare vendors data
  getCompareData = async _id => {
    try {
      console.log('id', _id);
      const data = await axios.get(`/indexes/products/${_id}`, {
        headers: await this.getHeaders(),
      });
      const res = data.data;
      console.log('getCompareData Res:', res);
      return res;
    } catch (e) {
      console.log('getCompareData Error', e.response.data);
      this.handleError(e.response.data);
    }
  };
  // get request ,Total Points of user
  getUserPointsData = async id => {
    try {
      console.log('id', id);
      const data = await axios.get(`/users/${id}/totalPoints/`, {
        headers: await this.getHeaders(),
      });
      const res = data.data;
      console.log('getUserPointsData Res:', res);
      return res;
    } catch (e) {
      console.log('getUserPointsData Error', e.response.data);
      this.handleError(e.response.data);
    }
  };

  //get all bookmarks
  fetchWishList = async () => {
    try {
      const data = await axios.get('/getbookmarks', {
        headers: await this.getHeaders(),
      });
      const res = data.data;

      console.log('fetchMyWishList Res:', res);
      return res;
    } catch (e) {
      console.log('fetchMyWishList Error', e.response.data);
      this.handleError(e.response.data);
    }
  };

  // POST Request
  // Add session to my agenda
  // Post data {session_id}
  addWishList = async postData => {
    console.log('addWishList postData:', postData);
    try {
      const data = await axios.post('/addbookmarks', postData, {
        headers: await this.getHeaders(),
      });
      const res = data.data;

      console.log('addWishList Res:', res);
      return res;
    } catch (e) {
      console.log('addWishList Error', e.response.data);
      this.handleError(e.response.data);
    }
  };

  // POST Request
  // Remove session from my agenda
  // Post data {session_id}
  removeWishList = async postData => {
    console.log('removeWishList postData:', postData);
    try {
      const data = await axios.post('/removebookmarks', postData, {
        headers: await this.getHeaders(),
      });
      const res = data.data;

      console.log('removeWishList Res:', res);
      return res;
    } catch (e) {
      console.log('removeWishList Error', e.response.data);
      this.handleError(e.response.data);
    }
  };
  //get aboutus data
  getAboutUsData = async () => {
    try {
      const data = await axios.get('/resources/staticpages/aboutus', {
        headers: await this.getHeaders(),
      });
      const res = data.data;
      console.log('getAboutUsData Res:', res);
      return res;
    } catch (e) {
      console.log('getAboutUsData Error', e.response.data);
      this.handleError(e.response.data);
    }
  };
  // get search products
  getSearchData = async keyword => {
    try {
      const data = await axios.get(`/products`, {
        headers: await this.getHeaders(),
        params: {
          title: keyword,
        },
      });
      const res = data.data;
      console.log('getSearchData Res:', res);
      return res;
    } catch (e) {
      console.log('getSearchData Error', e.response.data);
      this.handleError(e.response.data);
    }
  };

  // post Register
  postRegister = async postData => {
    console.log('postRegister postData', postData);

    try {
      console.log('postRegister post');
      const data = await axios.post('/register', postData, {
        headers: this.config,
      });

      const res = data.data;
      console.log('postRegister Res:', res);
      return res;
    } catch (e) {
      console.log('postRegister error:', e);
      this.handleError(e.response.data);
    }
  };
  // post referral code claim
  postReferralClaim = async postData => {
    console.log('postReferralClaim postData', postData);

    try {
      console.log('postReferralClaim post');
      const data = await axios.post('/users/referredPoints', postData, {
        headers: this.config,
      });

      const res = data.data;
      console.log('postReferralClaim Res:', res);
      return res;
    } catch (e) {
      console.log('postReferralClaim error:', e);
      this.handleError(e.response.data);
    }
  };
  // change password post request
  postChangePassword = async postData => {
    console.log('postChangePassword postData', postData);

    try {
      console.log('postChangePassword post');
      const data = await axios.post('/users/changePassword', postData, {
        headers: this.config,
      });

      const res = data.data;
      console.log('postChangePassword Res:', res);
      return res;
    } catch (e) {
      console.log('postChangePassword error:', e);
      this.handleError(e.response.data);
    }
  };
  // post request forget password
  postForgetPassword = async postData => {
    console.log('postForgetPassword postData:', postData);
    try {
      const data = await axios.post('/users/forgotPassword', postData, {
        headers: this.config,
      });
      const res = data.data;

      console.log('postForgetPassword Res:', res);
      return res;
    } catch (e) {
      console.log('postForgetPassword Error', e.response.data);
      this.handleError(e.response.data);
    }
  };

  // POST Request
  // Perform logout
  logout = async postData => {
    try {
      const data = await axios.post('/logout', postData, {
        headers: await this.getHeaders(),
      });
      const res = data.data;

      console.log('logout Res:', res);
      return res;
    } catch (e) {
      console.log('logout Error', e.response.data);
      this.handleError(e.response.data);

      return false;
    }
  };
}

export default new Api();
