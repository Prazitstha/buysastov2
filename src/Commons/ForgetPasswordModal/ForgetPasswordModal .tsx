import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import analytics from '@react-native-firebase/analytics';

import {Colors, HelperFunction, Api} from '../../Constants';
import styles from './styles/Styles';

interface ForgetPasswordModalProps {
  closeModal: () => void;
}

const ForgetPasswordModal: React.FC<ForgetPasswordModalProps> = props => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const [isValid, setIsValid] = useState(true);

  const handleResponse = async () => {
    setIsLoading(true);
    setIsValid(true);
    // analytics().logSelectContent({
    //   content_type: 'Forget Password Button Clicked',
    //   item_id: 'button2',
    // });
    try {
      const postData = {
        email: email,
      };
      if (email.length > 0) {
        // setIsValid(true);

        const res = await Api.postForgetPassword(postData);

        props.closeModal();
      } else {
        setIsValid(false);
      }

      setIsLoading(false);
    } catch (err) {
      setIsValid(false);
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => props.closeModal()}>
            <Ionicons
              name="ios-close"
              size={HelperFunction.ModerateScale(20)}
              color={Colors.main_color}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subtitle}>Forgot Password</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>

            <View
              style={[
                styles.inputBar,
                !isValid &&
                  email.length < 1 && {
                    borderColor: 'red',
                    borderWidth: HelperFunction.ModerateScale(1),
                  },
              ]}>
              <TextInput
                value={email}
                placeholder="example@gmail.com"
                onChangeText={text => setEmail(text.trim())}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>
          <Text style={styles.errorText}>
            {!isValid && <Text>Email field is empty or not valid</Text>}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleResponse()}
            disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#002891" />
            ) : (
              <Text style={styles.buttonText}>Done</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordModal;
