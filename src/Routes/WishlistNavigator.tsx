import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {Wishlist,WishlistDetails} from '../Screens';

const Stack = createNativeStackNavigator();

const WishlistNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="WishlistDetails" component={WishlistDetails} />
    </Stack.Navigator>
  );
};

export default WishlistNavigator;
