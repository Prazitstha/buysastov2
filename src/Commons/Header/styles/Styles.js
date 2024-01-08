import {StyleSheet} from 'react-native';

import {Colors, Fonts, HelperFunction} from '../../../Constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: HelperFunction.VerticalScale(80),
    backgroundColor: '#fff',
    paddingLeft: HelperFunction.Scale(15),
    paddingRight: HelperFunction.Scale(15),
// backgroundColor:'red',
    borderColor: Colors.borderColor,
  },
  logoSpan: {
    flex: 1,
    // alignItems: 'center',
  },
  // backs:{
  //   backgroundColor:'wheat',
  // },
  logo: {
    width: HelperFunction.Scale(150),
    height: HelperFunction.VerticalScale(100),
    resizeMode: 'contain',
  },
  title: {
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(20),
    fontFamily: Fonts.Barlow_SemiBold,
    textAlign: 'center',
  },
});
