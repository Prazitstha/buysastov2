import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {HelperFunction, Colors, Fonts} from '../../../Constants';

interface Styles {
  container: ViewStyle;
  logoStyle: ImageStyle;
  subContainer: ViewStyle;
  title: TextStyle;
  inputGroup: ViewStyle;
  inputLabel: TextStyle;
  inputBar: ViewStyle;
  textInput: TextStyle;
  icon: ViewStyle;
  forgetPasswordText: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  registerView: ViewStyle;
  registerText: TextStyle;
  signupText: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background_color,
  },
  logoStyle: {
    // backgroundColor: Colors.main_color,
    height: HelperFunction.ModerateScale(300),
    width: HelperFunction.ModerateScale(300),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: HelperFunction.VerticalScale(-65),
  },
  subContainer: {
    backgroundColor: '#CECECE',
    marginHorizontal: HelperFunction.Scale(20),
    paddingHorizontal: HelperFunction.Scale(15),
    paddingVertical: HelperFunction.VerticalScale(20),
    borderRadius: HelperFunction.ModerateScale(5),
    marginBottom: HelperFunction.VerticalScale(10),
  },
  title: {
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(25),
    fontFamily: Fonts.OpenSans_Bold,
  },
  inputGroup: {
    // backgroundColor: Colors.main_color,
    marginTop: HelperFunction.VerticalScale(20),
  },
  inputLabel: {
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans,
    marginBottom: HelperFunction.VerticalScale(10),
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background_color,
    paddingHorizontal: HelperFunction.Scale(10),
    borderColor: Colors.borderColor,
    borderWidth: HelperFunction.ModerateScale(1),
    borderRadius: HelperFunction.ModerateScale(5),
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.OpenSans,
    fontSize: HelperFunction.ModerateScale(16),
    paddingVertical: HelperFunction.VerticalScale(5),
    color: Colors.text_color,
  },
  icon: {
    paddingLeft: HelperFunction.Scale(5),
  },
  forgetPasswordText: {
    textAlign: 'right',
    color: Colors.secondary_color,
    fontSize: HelperFunction.ModerateScale(15),
    fontFamily: Fonts.OpenSans_SemiBold,
    marginBottom: HelperFunction.VerticalScale(10),
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.main_color,
    paddingHorizontal: HelperFunction.Scale(50),
    paddingVertical: HelperFunction.VerticalScale(7),
    borderRadius: HelperFunction.ModerateScale(5),
    marginBottom: HelperFunction.VerticalScale(10),
    marginTop: HelperFunction.VerticalScale(20),
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.background_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
    textTransform: 'uppercase',
  },
  registerView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#CECECE',
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  signupText: {
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  errorText: {
    color: 'red',
    fontSize: HelperFunction.ModerateScale(13),
    fontFamily: Fonts.OpenSans_SemiBold,
    textAlign: 'center',
  },
});
