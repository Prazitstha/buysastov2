import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {savepoints, saveusername} from '../../Screens/Authentication/actions';

import {Colors, HelperFunction, Images, Api} from '../../Constants';
import styles from './styles/Styles';

const Header = ({back, title, navigation, hideMenu = false}) => {
  const {user, dashboard} = useSelector(state => state);
  // console.log('dashboard',dashboard)
  const userid = user.user._id;
  const dispatch = useDispatch();

  const [pointsdata, setPointsData] = useState({});
  const [error, setError] = useState({});
  // Handle back onPress actionnavigat
  const onBackPress = () => {
    navigation.goBack();
  };

  // Handle menu onPress action
  const onPressMenu = async () => {
    // await UpdateData();
    // await UserPointsData();

    // console.log('p');
    navigation.toggleDrawer();
  };

  if (navigation == null) {
    // Render Header without navigation options
    return (
      <View style={styles.container}>
        <View style={styles.logoSpan}>
          {/* <Image source={Images.app_logo2} style={styles.logo} /> */}
        </View>
      </View>
    );
  } else {
    // Render Header with navigation options
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backs} onPress={onBackPress} disabled={back ? false : true}>
          <Ionicons
            name="ios-chevron-back"
            size={HelperFunction.ModerateScale(32)}
            color={back ? Colors.text_color : '#fff'}
          />
        </TouchableOpacity>

        <View style={styles.logoSpan}>
          <Image source={Images.app_Logo} style={styles.logo} />
        </View>

        <TouchableOpacity onPress={onPressMenu} disabled={hideMenu}>
          <Ionicons
            name="ios-menu"
            size={HelperFunction.ModerateScale(32)}
            color={hideMenu ? '#fff' : Colors.white}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default Header;
