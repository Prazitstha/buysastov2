import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import loremIpsum from 'lorem-ipsum';

import styles from './styles/AboutUsStyle';
import {Images, Colors, HelperFunction, Api} from '../../Constants';
import {Header, LoadingScreen} from '../../Commons';

const AboutUs = (): JSX.Element => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState('');

  const AboutData = async () => {
    setIsLoading(true);
    try {
      const res = await Api.getAboutUsData();
      console.log('res', res);

      setData(res);
    } catch (error) {
      console.error('Error fetching aboutus data:', error);
      setData({});
    }
    setIsLoading(false);
  };

  useEffect(() => {
    AboutData();
  }, []);

  return (
    <>
      <Header navigation={navigation} title="About Us" back />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView>
          <View style={styles.subContainer}>
            <Image
              style={styles.image}
              source={require('../../Images/aboutus.png')}
            />
            <View style={styles.title}>
              <Text style={styles.titleTxt}>About us</Text>
            </View>
            <View style={styles.paragraph}>
              <RenderHtml
                contentWidth={width}
                source={{html: data.description}}
              />
            </View>
          </View>
        </ScrollView>
        {isLoading && <LoadingScreen />}
      </KeyboardAvoidingView>
    </>
  );
};

export default AboutUs;
