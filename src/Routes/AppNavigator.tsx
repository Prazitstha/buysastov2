import React, {RefObject, useEffect, useCallback} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import AppDrawer from './AppDrawer';
import AuthNavigator from './AuthNavigator';
import {ConstStyles, Api} from '../Constants';
import {updateArray, updateWishList} from '../Screens/Authentication/actions';

export const navigationRef = React.createRef();
export const routeNameRef: RefObject<any> = React.createRef();

const AppNavigator = (): JSX.Element => {
  const {user} = useSelector(state => state);

  // const bookmarkfetch = () => {
  //   const res = await Api.fetchWishList();
  // };
  return (
    <View style={ConstStyles.container}>
      {user.isLoggedIn ? <AppDrawer /> : <AuthNavigator />}
      {/* <AppDrawer /> */}
    </View>
  );
};

export default AppNavigator;
