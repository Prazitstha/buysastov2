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
  loginView: ViewStyle;
  loginText: TextStyle;
  signinText: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#CECECE',
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
    // backgroundColor: '#CECECE',
    // marginHorizontal: HelperFunction.Scale(20),
    paddingHorizontal: HelperFunction.Scale(15),
    // paddingVertical: HelperFunction.VerticalScale(2),
    borderRadius: HelperFunction.ModerateScale(5),
    // marginBottom: HelperFunction.VerticalScale(50),
    marginTop: HelperFunction.VerticalScale(2),
  },
  title: {
    paddingHorizontal: HelperFunction.Scale(98),
    marginTop: HelperFunction.VerticalScale(10),
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(25),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  inputGroup: {
    // backgroundColor: Colors.main_color,
    marginTop: HelperFunction.VerticalScale(15),
  },
  inputLabel: {
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_Bold,
    marginBottom: HelperFunction.VerticalScale(7),
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background_color,
    paddingHorizontal: HelperFunction.Scale(10),
    marginTop: HelperFunction.VerticalScale(1),
    marginBottom: HelperFunction.VerticalScale(-5),
    borderColor: Colors.borderColor,
    borderWidth: HelperFunction.ModerateScale(1),
    borderRadius: HelperFunction.ModerateScale(5),
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.OpenSans_SemiBold,
    fontSize: HelperFunction.ModerateScale(16),
    paddingVertical: HelperFunction.VerticalScale(5),
    color: 'black',
    textTransform: 'capitalize' ,

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
    alignSelf: 'flex-end',
    backgroundColor: Colors.main_color,
    paddingHorizontal: HelperFunction.Scale(20),
    paddingVertical: HelperFunction.VerticalScale(7),
    borderRadius: HelperFunction.ModerateScale(5),
    marginBottom: HelperFunction.VerticalScale(10),
    marginTop: HelperFunction.VerticalScale(17),
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.background_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_Bold,
    // textTransform: 'uppercase',
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: '#CECECE',
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  signinText: {
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
});
