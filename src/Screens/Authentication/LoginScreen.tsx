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
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import analytics from '@react-native-firebase/analytics';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Toast from 'react-native-root-toast';

import {loginError, performLogin} from './actions';
import styles from './styles/LoginStyles';
import {ForgetPasswordModal, LoadingScreen} from '../../Commons';
import {Images, Colors, HelperFunction} from '../../Constants';

const LoginScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.user.loginError);
  const [email, setEmail] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);

  const showAddToast = (message, color) => {
    Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: Colors.secondary_color,
      // textStyle: styles(user.fontScale).toastText,
    });
  };
  const openForgetPasswordModal = () => {
    setForgetPasswordModal(true);
  };

  const closeForgetPasswordModal = () => {
    setForgetPasswordModal(false);
  };

  const onPressSignIn = async () => {
    setIsLoading(true);
    // analytics().logSelectContent({
    //   content_type: 'Login Button Clicked',
    //   item_id: 'button1',
    // });
    try {
      const postData = {
        email: email,
        password: password,
      };
      console.log('postData:', postData);
      await dispatch(performLogin(postData));
    } catch (e) {
      console.log('a');
      showAddToast(loginError, Colors.main_color);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <Image source={Images.app_Logo} style={styles.logoStyle} />
        <View style={styles.subContainer}>
          <Text style={styles.title}>WELCOME BACK</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email *</Text>
            <View
              style={[
                styles.inputBar,
                loginError !== null &&
                  email.length < 1 && {
                    borderColor: 'red',
                    borderWidth: HelperFunction.ModerateScale(1),
                  },
              ]}>
              <TextInput
                value={email}
                placeholder="example@gmail.com"
                placeholderTextColor={'#CECECE'}
                onChangeText={text => setEmail(text.trim())}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password *</Text>

            <View
              style={[
                styles.inputBar,
                loginError !== null &&
                  password.length < 1 && {
                    borderColor: 'red',
                    borderWidth: HelperFunction.ModerateScale(1),
                  },
              ]}>
              <TextInput
                value={password}
                placeholder="********"
                placeholderTextColor={'#CECECE'}
                style={styles.textInput}
                secureTextEntry={securePassword}
                onChangeText={text => setPassword(text)}
              />

              <TouchableOpacity
                style={styles.icon}
                onPress={() => setSecurePassword(!securePassword)}>
                <Ionicons
                  name={securePassword ? 'ios-eye-off-outline' : 'ios-eye'}
                  size={HelperFunction.ModerateScale(20)}
                  color={Colors.main_color}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => openForgetPasswordModal()}>
            <Text style={styles.forgetPasswordText}>Forgot Password ? </Text>
          </TouchableOpacity>
          {/* <Text style={styles.errorText}>{loginError}</Text> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressSignIn()}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerView}>
          <Text style={styles.registerText}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.signupText}>Sign up </Text>
          </TouchableOpacity>
        </View>
        {isLoading && <LoadingScreen />}
      </ScrollView>
      <Modal
        visible={forgetPasswordModal}
        onRequestClose={() => closeForgetPasswordModal()}
        transparent>
        <ForgetPasswordModal closeModal={closeForgetPasswordModal} />
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
