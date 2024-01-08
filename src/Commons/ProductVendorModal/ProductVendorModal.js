import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View,Linking} from 'react-native';

import {Colors} from '../../Constants';

import styles from './styles/Styles';



const ProductVendorModal = ({ pressCancel, link }) => {
  const onPressProduct = async () => {
    if (link) { // Check if a link is provided
      const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`;
      try {
        const supported = await Linking.canOpenURL(formattedLink);
        if (supported) {
          await Linking.openURL(formattedLink);
        } else {
          console.error("Don't know how to open URI: " + formattedLink);
        }
      } catch (error) {
        console.error('Error opening URL:', error);
      } finally {
        pressCancel(); // Close the modal when finished
      }
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.modalContainer]}>
        <Text style={[styles.title]}>Do you want to open browser ?</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: Colors.main_color}]}
            onPress={pressCancel}>
            <Text style={[styles.btnText, {color: '#fff'}]}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, {backgroundColor: Colors.main_color}]}
            onPress={onPressProduct}>
            <Text style={[styles.btnText, {color: '#fff'}]}>Open</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductVendorModal;
