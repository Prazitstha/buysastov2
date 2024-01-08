import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AboutUs} from '../Screens';

const Stack = createNativeStackNavigator();

const AboutUSNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
};

export default AboutUSNavigator;
