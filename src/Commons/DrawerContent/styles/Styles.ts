import {StyleSheet} from 'react-native';

import {Colors, Fonts, HelperFunction} from '../../../Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background_color,
  },
  dismissButton: {
    position: 'absolute',
    top: 0,
    right: -10, // Adjust this value as needed
    justifyContent: 'center',
    alignItems: 'center',
    width: HelperFunction.ModerateScale(45),
    height: HelperFunction.ModerateScale(65),
  },
  
  referralView:{
    // flexDirection:"row",
    // justifyContent:'space-around',
    marginTop:HelperFunction.ModerateScale(10),
    marginLeft:HelperFunction.ModerateScale(-10),
    // paddingLeft: HelperFunction.Scale(20),


  },
  
  labelReferral:{
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(20),
    fontFamily: Fonts.OpenSans_Bold,
  },
  referral:{
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(20),
    fontFamily: Fonts.OpenSans_Bold,

  },
  pointsView:{
    flexDirection:"row",
    gap: 15,
    // justifyContent:'space-around',
    // marginVertical:HelperFunction.ModerateScale(10),
    paddingLeft: HelperFunction.Scale(20),
    marginBottom: HelperFunction.VerticalScale(20),


  },
  points:{
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(20),
    fontFamily: Fonts.OpenSans_Bold,

  },
  labelPoints:{
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(20),
    fontFamily: Fonts.OpenSans_Bold,
  },
  

  logo: {
    width: HelperFunction.ModerateScale(250),
    height: HelperFunction.ModerateScale(100),
    resizeMode: 'contain',
    marginTop: HelperFunction.VerticalScale(15),
    marginBottom: HelperFunction.VerticalScale(10),
  },
  text: {
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(18),
    fontFamily: Fonts.OpenSans_Bold,
    paddingLeft: HelperFunction.Scale(20),
    marginBottom: HelperFunction.VerticalScale(10),
    textTransform: 'capitalize',
  },
  Pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: HelperFunction.ModerateScale(35),
    width: HelperFunction.ModerateScale(180),
    paddingHorizontal: HelperFunction.Scale(20),
    borderRadius: HelperFunction.ModerateScale(10),
    backgroundColor: Colors.background_color,
  },
  playtext: {
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(14),
    fontFamily: Fonts.OpenSans_SemiBold,
    marginLeft: HelperFunction.Scale(10),
  },
});
