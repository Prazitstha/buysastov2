import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Search, Wishlist} from '../Screens';
import {HelperFunction} from '../Constants';
import ProductNavigator from '../Routes/ProductNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'ProductNavigator') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          }

          return <Ionicons style={{marginTop:10}} name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#8A8A8F',
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopWidth: 0,
        },
        // tabBarLabelStyle: {
        //   fontFamily: 'Inter-Medium',
        //   fontSize: HelperFunction.ModerateScale(12),
        //   marginBottom: HelperFunction.VerticalScale(5),
        // },
        // tabBarLabelPosition: 'below-icon',
        tabBarBadgeStyle: {
          backgroundColor: '#FF0000',
          color: '#FFFFFF',
          fontSize: HelperFunction.ModerateScale(10),
          height: HelperFunction.VerticalScale(16),
          minWidth: HelperFunction.Scale(16),
          paddingHorizontal: HelperFunction.Scale(2),
          borderRadius: HelperFunction.ModerateScale(8),
          textAlign: 'center',
          overflow: 'hidden',
        },
      })}>
      <Tab.Screen
        name="ProductNavigator"
        component={ProductNavigator}
        options={{
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}
