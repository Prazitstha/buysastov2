import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native'; // Removed duplicate 'View' import
import { useRoute } from '@react-navigation/native';
import { Header, LoadingScreen } from '../../Commons';

const ProductWebView = ({ navigation }) => {
  const route = useRoute();
  const { link } = route.params;

  const openLinkInBrowser = async () => {
    try {
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        await Linking.openURL(link);
      } else {
        console.error("Don't know how to open URI: " + link);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    } finally {
      // Navigate back or perform any other actions
      navigation.goBack(); // This will navigate back to the previous screen
    }
  };

  useEffect(() => {
    openLinkInBrowser();
  }, [link, navigation]);

  return (
    <>
      <Header navigation={navigation} back hideMenu title={undefined} />
      <View style={{ flex: 1 }}>
        <LoadingScreen />
      </View>
    </>
  );
};

export default ProductWebView;
