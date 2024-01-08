import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import {useDispatch, useSelector} from 'react-redux';

import styles from './style/ChangePasswordStyle';
import {Colors, HelperFunction, Api} from '../../Constants';
import {Header, LoadingScreen} from '../../Commons';
import {performLogout} from '../../Screens/Authentication/actions';

const ChangePassword = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [securePassword, setSecurePassword] = useState(true);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  // const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureConfirmpassword, setSecureConfirmPassword] = useState(true);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);
    analytics().logSelectContent({
      content_type: 'Changed Password Button Clicked',
      item_id: 'button4',
    });
    const postData = {
      password: password,
      newPassword: newPassword,
      confirmPassword: newPassword,
    };

    try {
      console.log('bsbs');
      await Api.postChangePassword(postData);
      dispatch(performLogout());
    } catch (e) {
      console.log('error', e.error);
      setIsLoading(false);
      setError(e.error);
    }
    setIsLoading(false);
  };
  return (
    <>
      <Header navigation={navigation} title="Change Password" back />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Change Password</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password*</Text>

              <View
                style={[
                  styles.inputBar,
                  error.password?.length > 0 && {
                    borderColor: Colors.main_color,
                  },
                ]}>
                <TextInput
                  value={password}
                  placeholder="********"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  secureTextEntry={securePassword}
                  onChangeText={text => {
                    setPassword(text);
                    setError({...error, password: []});
                  }}
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
              <Text style={styles.errorText}>
                {error?.password?.map(
                  (e, index) => `${index !== 0 ? '\n' : ''}${e}`,
                )}
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>New Password*</Text>

              <View
                style={[
                  styles.inputBar,
                  error.newPassword?.length > 0 && {
                    borderColor: Colors.main_color,
                  },
                ]}>
                <TextInput
                  value={newPassword}
                  placeholder="********"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  secureTextEntry={securePassword}
                  onChangeText={text => {
                    setNewPassword(text);
                    setError({...error, newPassword: []});
                  }}
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
              <Text style={styles.errorText}>
                {error?.newPassword?.map(
                  (e, index) => `${index !== 0 ? '\n' : ''}${e}`,
                )}
              </Text>
            </View>
            {/* <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm Password</Text>

              <View
                style={[
                  styles.inputBar,
                  error.confirmPassword?.length > 0 && {
                    borderColor: Colors.main_color,
                  },
                ]}>
                <TextInput
                  value={confirmPassword}
                  placeholder="********"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  secureTextEntry={secureConfirmpassword}
                  onChangeText={text => {
                    setConfirmPassword(text);
                    setError({...error, confirmPassword: []});
                  }}
                />

                <TouchableOpacity
                  style={styles.icon}
                  onPress={() =>
                    setSecureConfirmPassword(!secureConfirmpassword)
                  }>
                  <Ionicons
                    name={
                      secureConfirmpassword ? 'ios-eye-off-outline' : 'ios-eye'
                    }
                    size={HelperFunction.ModerateScale(20)}
                    color={Colors.main_color}
                  />
                </TouchableOpacity> */}
              {/* </View> */}
              {/* <Text style={styles.errorText}>
                {error?.confirmPassword?.map(
                  (e, index) => `${index !== 0 ? '\n' : ''}${e}`,
                )}
              </Text>
            </View> */}

            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {isLoading && <LoadingScreen />}
      </KeyboardAvoidingView>
    </>
  );
};

export default ChangePassword;
