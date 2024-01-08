import React, { useState } from 'react';
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
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import analytics from '@react-native-firebase/analytics';

import styles from './styles/RegistrationStyles';
import { Images, Api, Colors, HelperFunction } from '../../Constants';
import { LoadingScreen } from '../../Commons';

const ChangePassword = ({ navigation }): JSX.Element => {
  const [securePassword, setSecurePassword] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [referralCode, setReferralCode] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // Add this state

  const handleSignUp = async () => {
    setIsLoading(true);
    analytics().logSelectContent({
      content_type: 'Register Button Clicked',
      item_id: 'button3',
    });
    const postData = {
      email: email,
      password: password,
      confirmPassword: password,
      referralCode: referralCode,
    };
console.log('referralCode',referralCode);
    try {
      await Api.postRegister(postData);
      // Assuming successful registration, set registrationSuccess to true
      setRegistrationSuccess(true);
    } catch (e) {
      console.log('error', e);
      setError(e.error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  } else if (registrationSuccess) {
    return (
      <View style={styles.successContainer}>
      <View style={styles.titleContainer}>
        <Image source={Images.app_Logo} style={styles.logoStyle} />
      </View>
      <View style={styles.centeredContainer}>
        <Ionicons
          style={{ marginBottom: HelperFunction.VerticalScale(20) }}
          name={'checkmark-circle'}
          size={HelperFunction.ModerateScale(40)}
          color='green'
        />
        <Text style={styles.subtitle}> Successful !</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
             Your application has been received. An activation link has been sent to your email. Please check your email to verify your email address.
            {/* Note the space after the period */}
           
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>  Tap here to sign in</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    
    
    );
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView>
          <Image source={Images.app_Logo} style={styles.logoStyle} />
          <View style={styles.subContainer}>
            <Text style={styles.title}>Registration</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email *</Text>
              <View
                style={[
                  styles.inputBar,
                  error.email?.length > 0 && {
                    borderColor: Colors.main_color,
                  },
                ]}
              >
                <TextInput
                  value={email}
                  placeholder="example@gmail.com"
                  placeholderTextColor={'#CECECE'}
                  onChangeText={(text) => {
                    setEmail(text.trim());
                    setError({ ...error, email: [] });
                  }}
                  style={styles.textInput}
                  autoCapitalize="none"
                />
              </View>
              <Text style={styles.errorText}>
                {error?.email?.map((e, index) =>
                  `${index !== 0 ? '\n' : ''}${e}`
                )}
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password *</Text>

              <View
                style={[
                  styles.inputBar,
                  error.password?.length > 0 && {
                    borderColor: Colors.main_color,
                  },
                ]}
              >
                <TextInput
                  value={password}
                  placeholder="********"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  secureTextEntry={securePassword}
                  onChangeText={(text) => {
                    setPassword(text.trim());
                    setError({ ...error, password: [] });
                  }}
                />

                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => setSecurePassword(!securePassword)}
                >
                  <Ionicons
                    name={
                      securePassword ? 'ios-eye-off-outline' : 'ios-eye'
                    }
                    size={HelperFunction.ModerateScale(20)}
                    color={Colors.main_color}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.errorText}>
                {error?.password?.map((e, index) =>
                  `${index !== 0 ? '\n' : ''}${e}`
                )}
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Referral Code</Text>

              <View
                style={[
                  styles.inputBar,
                  error.referralCode?.length > 0 && {
                    borderColor: Colors.main_color,
                  },
                ]}
              >
                <TextInput
                  value={referralCode}
                  placeholder="Enter your referral code"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  // secureTextEntry={securePassword}
                  onChangeText={(text) => {
                    setReferralCode(text.trim());
                    setError({ ...error, referralCode: [] });
                  }}
                />
              </View>
              <Text style={styles.errorText}>
                {error?.referralCode?.map((e, index) =>
                  `${index !== 0 ? '\n' : ''}${e}`
                )}
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginView}>
            <Text style={styles.loginText}>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signinText}>Sign in </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
};

export default ChangePassword;
