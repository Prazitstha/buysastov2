import React,{useState,useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TokenExpiry} from '../Screens';



import {AboutUs, ChangePassword,Wishlist} from '../Screens';
import {HelperFunction, Colors, Fonts, Icons,Api} from '../Constants';
import {DrawerContent} from '../Commons';
import TabNavigator from './TabNavigator';
import ProfileNavigator from './ProfileNavigator';
import AboutUSNavigator from './AboutUsNavigator';
import {Image} from 'react-native';
import { Clock } from 'react-native-reanimated';
import ReferralNavigator from './ReferralNavigator';
import WishlistNavigator from './WishlistNavigator';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  const navigation = useNavigation();
  // const {user} = useSelector(state => state);
  // const userid = user.user._id;
  // const [pointsdata, setPointsData] = useState({});
   


  // useEffect(() => {
  //   UserPointsData ();
  // },[]);
  // const UserPointsData = async () => {
  //   try {
  //     const res = await Api.getUserPointsData(user.user._id);
  //     console.log('points', res);
  
  //     setPointsData(res);
  //   } catch (error) {
  //     console.error('Error fetching points:', error);
  //     setPointsData({});
  //   }
  // };

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          swipeEnabled: false,
          activeTintColor: Colors.background_color,
          inactiveTintColor: Colors.background_color,
          activeBackgroundColor: null,
        }}
        
        drawerStyle={{
          width: HelperFunction.ModerateScale(350),

          // width: '100%',
        }}
        drawerContent={props => <DrawerContent {...props} />}
       >
        <Drawer.Screen
          name="Tabs"
          component={TabNavigator}
          options={{
            drawerLabel: ' Home',
            drawerActiveTintColor:Colors.main_color,
            unmountOnBlur: true,
            drawerIcon: _props => (
              <Image
                source={Icons.home}
                style={{
                  height: _props.size + 5,
                  width: _props.size - 5,
                  
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
        
          name="ChangePassword"
          component={ChangePassword}
          options={{
            drawerLabel: 'Change Password',
            drawerActiveTintColor:Colors.main_color,
            unmountOnBlur: true,
            drawerIcon: _props => (
              // <Image
              //   source={Icons.changepassword}
              //   style={{
              //     height: _props.size + 5,
              //     width: _props.size - 5,
              //   }}
              // />
              <IonIcons name="ios-key" size={22} color="#D7141A" />
            ),
          }}
        />
        <Drawer.Screen
          name="ProfileNav"
          component={ProfileNavigator}
          options={{
            drawerActiveTintColor:Colors.main_color,
            drawerLabel: 'My Profile',
            unmountOnBlur: true,
            drawerIcon: _props => (
              <Image
                source={Icons.myprofile}
                style={{
                  height: _props.size + 5,
                  width: _props.size - 3,
                }}
              />
            ),
          }}
        />
     <Drawer.Screen
  name="WishlistNav"
  component={WishlistNavigator}
  options={{
    drawerActiveTintColor: Colors.main_color,
    drawerLabel: 'Wishlist',
    unmountOnBlur: true,
    drawerIcon: ({ focused, color, size }) => (
      <IonIcons
        name="bookmark" // Adjust the icon name as needed
        color="#D7141A"
        size={size - 3.5}
      />
    ),
  }}
/>
        <Drawer.Screen
          name="AboutUsNav"
          component={AboutUSNavigator}
          options={{
            drawerActiveTintColor:Colors.main_color,
            drawerLabel: 'About us',
            unmountOnBlur: true,
            drawerIcon: _props => (
              <MaterialIcons name="description" size={20} color="#D7141A" />
            ),
          }}
        />
            <Drawer.Screen
          name="ReferralNav"
          component={ReferralNavigator}
          options={{
            drawerActiveTintColor:Colors.main_color,
            drawerLabel: 'Refer',
            unmountOnBlur: true,
            drawerIcon: _props => (
              <FontAwesome name="share" size={17} color="#D7141A" />
            ),
          }}
        />
         <Drawer.Screen
          name="TokenExpiry"
          component={TokenExpiry}
          options={{
            drawerStyle: {display: 'none'},
            drawerItemStyle: {
              display: 'none',
            },
            unmountOnBlur: true,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppDrawer;
