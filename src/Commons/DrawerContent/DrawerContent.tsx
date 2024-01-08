import React, {useState, useEffect} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles/Styles';
import {Colors, HelperFunction, Images, Api} from '../../Constants';
import {LogoutModal} from '../../Commons';
import {performLogout} from '../../Screens/Authentication/actions';
import {ReferralModal} from '../ReferralModal';

const DrawerContent = props => {
  const {user} = useSelector(state => state);
  const dispatch = useDispatch();
  const {state, navigation} = props;
  const showRoutes = [
    'Tabs',
    'ChangePassword',
    'ProfileNav',
    'WishlistNav',
    'AboutUsNav',
  ];

  const userreferralid = user.user.referralCode;

  const newState = {
    ...state,
    routes: state.routes.filter((item: {name: string}) =>
      showRoutes.includes(item.name),
    ),
  };
  const [confirmModal, setConfirmModal] = useState(false);
  const [confirmRModal, setConfirmRModal] = useState(false);

  const _signOut = async () => {
    setConfirmModal(false);
    const res = await Api.logout();

    dispatch(performLogout());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dismissButton}
        onPress={() => navigation.closeDrawer()}>
        <Ionicons
          name="ios-close"
          size={HelperFunction.ModerateScale(38)}
          color={Colors.main_color}
        />
      </TouchableOpacity>

      <Image source={Images.app_Logo} style={styles.logo} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList state={newState} {...props} />
      </DrawerContentScrollView>

      <View style={styles.pointsView}>
        <Text style={styles.labelPoints}>Points </Text>
        <Text style={styles.points}>{user.points}</Text>
      </View>
      {/* <View style={styles.referralView}>
        <TouchableOpacity
          style={[
            styles.Pressable,
            ,
            {
              marginBottom: HelperFunction.VerticalScale(15),
              // marginLeft: HelperFunction.Scale(30),
            },
          ]}
          onPress={() => setConfirmRModal(true)}>
          <Text style={styles.playtext}>Referral Code</Text>
        </TouchableOpacity>
      </View> */}
      <Text style={styles.text}>Welcome, {user.username}</Text>
      <TouchableOpacity
        style={[
          styles.Pressable,
          ,
          {
            marginBottom: HelperFunction.VerticalScale(15),
            // marginLeft: HelperFunction.Scale(30),
          },
        ]}
        onPress={() => setConfirmModal(true)}>
        <AntDesign
          name="poweroff"
          size={HelperFunction.ModerateScale(20)}
          color={Colors.text_color}
        />
        <Text style={styles.playtext}>Logout</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={confirmModal}
        onRequestClose={() => setConfirmModal(false)}>
        <LogoutModal
          pressCancel={() => setConfirmModal(false)}
          pressLogOut={_signOut}
        />
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={confirmRModal}
        onRequestClose={() => setConfirmRModal(false)}>
        <ReferralModal pressCancel={() => setConfirmRModal(false)} />
      </Modal>
    </View>
  );
};

export default DrawerContent;
