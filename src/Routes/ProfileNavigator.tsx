import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Profile,EditProfile} from '../Screens';

const Stack = createNativeStackNavigator();

const ProfileNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
