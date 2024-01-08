import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import {Colors, Api} from '../../Constants';

import styles from './styles/Styles';
const ReferralModal = ({pressCancel}) => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');
  const [submitted, setSubmitted] = useState(false);

  const handlerefer = async () => {
    try {
      setSubmitted(true);
      const postData = {
        referralCode: text,
      };

      const response = await Api.postReferralClaim(postData);
      console.log('Referral Claim Response:', response);

      setMessage('Referral Points Claimed Successfully!');

      setMessageColor('green');
      pressCancel();
    } catch (e) {
      console.log('API Error:', e);
      const errorMessage = e.error || 'An error occurred. Please try again.';
      setMessage(errorMessage);
      setMessageColor('red');
    }

    // setTimeout(() => {
    //   setMessage('');
    //   setMessageColor('black');
    // }, 3000);
  };

  const handleTextChange = newText => {
    setText(newText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.modalContainer]}>
        <Text style={[styles.title]}> Enter the referral code </Text>
        <View>
          <TextInput
            style={[
              styles.input,
              submitted && text.trim() === '' && styles.inputInvalid,
            ]}
            placeholder="Referral code"
            placeholderTextColor={Colors.text_color}
            onChangeText={handleTextChange}
            value={text}
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: Colors.main_color}]}
            onPress={pressCancel}>
            <Text style={[styles.btnText, {color: '#fff'}]}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, {backgroundColor: Colors.main_color}]}
            onPress={handlerefer}>
            <Text style={[styles.btnText, {color: '#fff'}]}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Display Message */}
        <Text style={[styles.messageText, {color: messageColor}]}>
          {message}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ReferralModal;
