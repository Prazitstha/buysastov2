import {StyleSheet} from 'react-native';

import {Colors, Fonts, HelperFunction} from '../../../Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.background_color,
    marginHorizontal: HelperFunction.Scale(30),
    borderRadius: HelperFunction.ModerateScale(4),
    borderColor: Colors.borderColor,
    borderWidth: 0.5,
  },
  title: {
    textAlign: 'center',
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
    marginVertical: HelperFunction.VerticalScale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: HelperFunction.VerticalScale(20),
  },
  btn: {
    width: HelperFunction.Scale(70),
    paddingVertical: HelperFunction.VerticalScale(5),
    borderRadius: HelperFunction.ModerateScale(5),
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
});
