import {Dimensions, StyleSheet} from 'react-native';

import Colors from './Colors';
import Fonts from './Fonts';
import HelperFunction from './HelperFunction';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background_color,
  },
});
