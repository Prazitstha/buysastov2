import React, {useState, useCallback} from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
// import analytics from '@react-native-firebase/analytics';

import styles from './styles/EditProfileStyle';
import {Images, Colors, Api, HelperFunction} from '../../Constants';
import {Header} from '../../Commons';

const EditProfile = (): JSX.Element => {
  const route = useRoute();
  const {data} = route.params;
  const navigation = useNavigation();
  const [error, setError] = useState({});
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState(data.address);
  const [phone, setPhone] = useState(data.phone);

  const [securePassword, setSecurePassword] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureConfirmpassword, setSecureConfirmPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async () => {
    // analytics().logSelectContent({
    //   content_type: 'Edit Profile Button Clicked',
    //   item_id: 'button5',
    // });
    const patchData = {
      name: name,
      phone: phone,
      address: address,
      // email: email,
      // password: password,
      // confirmPassword: confirmPassword,
    };

    try {
      console.log('bsbs');
      await Api.patchUpdate(patchData);
      navigation.goBack();
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <>
      <Header navigation={navigation} title="Edit Profile" back />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Edit Profile</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name</Text>

              <View style={styles.inputBar}>
                <TextInput
                  value={name}
                  placeholder="Enter Your Full Name"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  onChangeText={text => setName(text)}
                />
              </View>
            </View>
            {/* <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>

              <View style={styles.inputBar}>
                <TextInput
                  value={email}
                  placeholder="Enter Your Email"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  onChangeText={text => setEmail(text)}
                />
              </View>
            </View> */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Address</Text>

              <View style={styles.inputBar}>
                <TextInput
                  value={address}
                  placeholder="Enter Your Address"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  onChangeText={text => setAddress(text)}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Contact Number</Text>

              <View style={styles.inputBar}>
                <TextInput
                  value={phone}
                  placeholder="Contact Number"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  onChangeText={text => setPhone(text)}
                />
              </View>
            </View>

            {/* <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>

              <View style={styles.inputBar}>
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
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm Password</Text>

              <View style={styles.inputBar}>
                <TextInput
                  value={confirmPassword}
                  placeholder="********"
                  placeholderTextColor={'#CECECE'}
                  style={styles.textInput}
                  secureTextEntry={secureConfirmpassword}
                  onChangeText={text => setConfirmPassword(text)}
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
                </TouchableOpacity>
              </View>
            </View> */}

            <TouchableOpacity onPress={handleUpdate} style={styles.button}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
