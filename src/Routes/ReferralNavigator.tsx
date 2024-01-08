import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Referral} from '../Screens';

const Stack = createNativeStackNavigator();

const ReferralNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Referral" component={Referral} />
    </Stack.Navigator>
  );
};

export default ReferralNavigator;