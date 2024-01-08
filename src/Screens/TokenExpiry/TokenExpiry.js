import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';

import {LoadingScreen} from '../../Commons/LoadingScreen';
import {Api} from '../../Constants';

import {performLogout} from '../Authentication/actions';
import { navigationRef } from '../../Routes/AppNavigator';
import {useSelector, useDispatch} from 'react-redux';


const TokenExpiry = () => {
  const dispatch = useDispatch();
  console.log('enter token expiry')
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    async function processLogout() {
      await _signOut();
    }
    processLogout();

    return () => {};
  }, []);

  const backAction = () => {
    return true;
  };

  const _signOut = async () => {
    try {
      console.log('enter sign out')
      await Api.logout();
      dispatch(performLogout());
    } catch (e) {
      console.log('error',e);
    }
  };

  return <LoadingScreen />;
};

export default TokenExpiry;
