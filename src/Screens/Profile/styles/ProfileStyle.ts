import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {HelperFunction, Colors, Fonts} from '../../../Constants';

interface Styles {
  detailsLabel: TextStyle;
  detailsTxt: TextStyle;
  details: ViewStyle;
  container: ViewStyle;
  logoStyle: ImageStyle;
  subContainer: ViewStyle;
  title: TextStyle;
  // inputGroup: ViewStyle;
  // inputLabel: TextStyle;
  // inputBar: ViewStyle;
  // textInput: TextStyle;
  icon: ViewStyle;
  // forgetPasswordText: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  // loginView: ViewStyle;
  // loginText: TextStyle;
  // signinText: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background_color,
  },
  subContainer: {
    // flex: 1,
    position: 'absolute',
    width: HelperFunction.Scale(350),
    height: HelperFunction.VerticalScale(205),
    zIndex: 1,
    backgroundColor: Colors.main_color,
    alignItems: 'center',
  },
  details: {
    flex: 0,
    position: 'absolute',
    top: 200,
    left: 10,

    zIndex: 2,
    backgroundColor: 'white',
    // marginHorizontal: HelperFunction.Scale(1),
    width: '95%',
    paddingHorizontal: HelperFunction.Scale(20),
    paddingVertical: HelperFunction.VerticalScale(10),
    borderRadius: HelperFunction.ModerateScale(5),
    borderColor: 'grey',
  },

  logoStyle: {
    // backgroundColor: Colors.main_color,

    height: HelperFunction.ModerateScale(300),
    width: HelperFunction.ModerateScale(300),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: HelperFunction.VerticalScale(-65),
  },

  title: {
    color: Colors.background_color,
    fontSize: HelperFunction.ModerateScale(22),
    fontFamily: Fonts.OpenSans_Bold,
    marginVertical: HelperFunction.VerticalScale(15),
  },
  icon: {
    paddingLeft: HelperFunction.Scale(5),
    marginTop: HelperFunction.VerticalScale(5),
    marginBottom: HelperFunction.VerticalScale(50),
  },
  // titleEdit:{
  //   flexDirection:'row',
  //   // backgroundColor:'black',
  //   alignItems:'center',
  //   justifyContent:'space-between',

  // },
  iconEdit: {
    position: 'absolute',
    top: 21,
    right: -130,
  },
  detailsTexts:{
    fontFamily: Fonts.OpenSans_SemiBold,
    fontSize: HelperFunction.ModerateScale(15),
  },

  detailsTxt: {
    fontFamily: Fonts.OpenSans_SemiBold,
    fontSize: HelperFunction.ModerateScale(15),
    textTransform: 'capitalize' ,
  },
  detailsLabel: {
    fontFamily: Fonts.OpenSans_SemiBold,
    fontSize: HelperFunction.ModerateScale(13),
    color: Colors.borderColor,
    marginBottom: HelperFunction.VerticalScale(15),
  },

  button: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.main_color,
    paddingHorizontal: HelperFunction.Scale(20),
    paddingVertical: HelperFunction.VerticalScale(7),
    borderRadius: HelperFunction.ModerateScale(5),
    marginBottom: HelperFunction.VerticalScale(4),
    marginTop: HelperFunction.VerticalScale(5),
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.background_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
    // textTransform: 'uppercase',
  },
});
