import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  Alert,
  KeyboardAvoidingView,
  ScrollView, // Import Alert
} from 'react-native';
import { Header, LoadingScreen } from '../../Commons';
import { useNavigation } from '@react-navigation/native';
import { Api } from '../../Constants';
import styles from './styles/ReferralStyle';

const ReferralCodeInput = () => {
  const navigation = useNavigation();

  const [emails, setEmails] = useState(['', '', '', '', '']);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for controlling the custom modal

  const handleEmailChange = (index: number, value: string) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };

  const handleSubmitReferralCode = async () => {
    setError(null);
    setIsLoading(true);
    setSubmitted(true);
    const postData = {
      emails: emails.filter(email => email !== ''), // Filter out empty email fields
    };

    try {
      await Api.postGenerateReferralCode(postData);
      setMessage(null);
      setIsModalVisible(true); // Show the custom modal
      setEmails(['', '', '', '', '']);
      // Clear the error state
    } catch (e: any) {
      console.log('API Error:', e);
      setError(e.message);
      setMessage(e.message || 'An error occurred. Please try again.');
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Optional
      >
        <ScrollView style={{ flex: 1 }}>
          <Header navigation={navigation} title="Refer" back />

          <View style={styles.container}>
            <View style={styles.subContainer}>
              <View style={styles.referralContainer}>
              <Text style={styles.title}>Referral Code</Text>
              </View>
              {/* <Text >Enter the Email id to refer this App */}

              {emails.map((email, index) => (
                <View key={index} style={styles.emailContainer}>
                  <Text style={styles.inputLabel}>{`Email ${index + 1}*`}</Text>
                  <TextInput
                    value={email}
                    placeholder={`Enter email ${index + 1}...`}
                    placeholderTextColor={'#CECECE'}
                    style={[
                      styles.input,
                      submitted && error !== null && styles.inputInvalid,
                    ]}
                    onChangeText={text => handleEmailChange(index, text)}
                  />
                </View>
              ))}

              {/* Display Message */}
              {message !== '' && (
                <Text style={styles.messageText}>{message}</Text>
              )}
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmitReferralCode}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
            {isLoading && <LoadingScreen />}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Custom modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Successfully send the referral code.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ReferralCodeInput;
