import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {HelperFunction, Colors, Fonts} from '../../../Constants';

interface Styles {
  sucessSigninText: StyleProp<TextStyle>;
  signinContainer: StyleProp<ViewStyle>;
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
  successContainer:ViewStyle;
titleContainer:TextStyle;
centeredContainer:ViewStyle;
subtitle:TextStyle;
messageContainer:ViewStyle;
message:TextStyle;
sucessSignInText:TextStyle;

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
    paddingVertical: HelperFunction.VerticalScale(10),
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
    borderRadius: HelperFunction.ModerateScale(10),
    marginBottom: HelperFunction.VerticalScale(10),
    marginTop: HelperFunction.VerticalScale(10),
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.background_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
    textTransform: 'uppercase',
    // marginTop:HelperFunction.VerticalScale(10\\),
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
  errorText: {
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(13),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  successContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow', // Set your desired background color
  },
  titleContainer: {
    marginVertical:HelperFunction.VerticalScale(10),
    // alignSelf: 'flex-start', // Align title to the top
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  centeredContainer: {
    backgroundColor:'white',
    // marginTop:HelperFunction.VerticalScale(10),
    paddingVertical:HelperFunction.VerticalScale(50),
    // paddingHorizontal:HelperFunction.ModerateScale(50),
    borderColor:Colors.borderColor,
    alignItems: 'center',
    // justifyContent:'center',
  },
  subtitle: {
    fontSize: 30,
    marginBottom: 10,
  },
  messageContainer: {
    paddingHorizontal: 30,
    // paddingVertical: 30,
    // textAlign: 'left', // Horizontal alignment starts from the center
    // alignItems: 'center', // Vertical center alignment
    // justifyContent: 'center', // Vertical center alignment
    // alignItems:'center',
    // justifyContent:'center',
  },
  
  
  message: {
    fontSize: HelperFunction.Scale(18),
    color: '#555', // Set your desired text color
    marginBottom:HelperFunction.VerticalScale(8),
    // padding:10,
    // alignItems:'center',
    // justifyContent:'center',
  },
  sucessSignInText: {
    color: Colors.button_text_color,
    fontSize: HelperFunction.ModerateScale(15),
    fontFamily: Fonts.OpenSans_SemiBold,
    backgroundColor:Colors.main_color,
    // borderWidth:HelperFunction.Scale(5),

    // alignItems:'center',
    // justifyContent:'center',


  },
  });

