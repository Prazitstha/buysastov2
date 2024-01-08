import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './styles/Styles';
import {Colors} from '../../Constants';

const LoadingScreen = () => {
  // Render an activity indicator that cover the whole View
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.main_color} />
    </View>
  );
};

export default LoadingScreen;
