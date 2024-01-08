import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {Colors} from '../../Constants';

import styles from './styles/Styles';

const LogoutModal = ({pressLogOut, pressCancel}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.modalContainer]}>
        <Text style={[styles.title]}>Are you sure you want to log out?</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: Colors.main_color}]}
            onPress={pressCancel}>
            <Text style={[styles.btnText, {color: '#fff'}]}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, {backgroundColor: Colors.main_color}]}
            onPress={pressLogOut}>
            <Text style={[styles.btnText, {color: '#fff'}]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogoutModal;
