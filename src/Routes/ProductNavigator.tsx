import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dashboard, MobileScreen, ProductDetails,ProductWebView} from '../Screens';

const Stack = createNativeStackNavigator();

const ProductNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Mobile" component={MobileScreen} />
      <Stack.Screen name="ProductWebView" component={ProductWebView} /> 
    </Stack.Navigator>
  );
};

export default ProductNavigator;
