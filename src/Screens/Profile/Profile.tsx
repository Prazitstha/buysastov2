import React, {useState, useEffect, useCallback} from 'react';
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
import {
  useNavigation,
  useIsFocused,
  useFocusEffect,
} from '@react-navigation/native';

import styles from './styles/ProfileStyle';
import {Api} from '../../Constants';
import {Header, LoadingScreen} from '../../Commons';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const Profile = (): JSX.Element => {
  const {user} = useSelector(state => state);

  const navigation = useNavigation();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const userid = user.user._id;

  console.log('userid', userid);

  useFocusEffect(
    useCallback(() => {
      const fetchFullData = async () => {
        await UpdateData();
      };

      fetchFullData();
    }, []),
  );

  const UpdateData = async () => {
    setIsLoading(true);
    try {
      const response = await Api.getUpdateData(userid);
      console.log('res', response);

      setData(response);
    } catch (error) {
      console.error('Error fetching update data:', error);
      setData({});
    }
    setIsLoading(false);
  };

  return (
    <>
      <Header navigation={navigation} title="Profile" back />

      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.titleEdit}>
            <Text style={styles.title}>My Profile</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile', {data: data})}
              style={styles.iconEdit}>
              <Icons name="edit" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.icon}>
            <Icons name="user-circle" size={72} color="white" />
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.detailsTxt}>{data.name}</Text>

          <Text style={styles.detailsLabel}>Name</Text>
          <Text style={styles.detailsTexts}>{data.email}</Text>
          <Text style={styles.detailsLabel}>Email</Text>
          <Text style={styles.detailsTxt}>{data.address}</Text>
          <Text style={styles.detailsLabel}>Address</Text>
          <Text style={styles.detailsTxt}>{data.phone}</Text>
          <Text style={styles.detailsLabel}>Contact Number</Text>
          {/* <Text style={styles.detailsTxt}>*******</Text>
          <Text style={styles.detailsLabel}>Password</Text>
          <Text style={styles.detailsTxt}>*******</Text>
          <Text style={styles.detailsLabel}>Confirm Password</Text> */}
          {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity> */}
        </View>
      </View>
      {isLoading && <LoadingScreen />}
    </>
  );
};

export default Profile;
