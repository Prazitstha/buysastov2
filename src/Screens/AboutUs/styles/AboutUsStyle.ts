import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {HelperFunction, Colors, Fonts} from '../../../Constants';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;

}

export default StyleSheet.create({
  container: {
    
  },
  
  subContainer: {
    backgroundColor: '#CECECE',
    paddingHorizontal: HelperFunction.Scale(15),
    paddingVertical: HelperFunction.VerticalScale(20),
    
  },
  image:{
    width:400,
    height:200,
    marginHorizontal:20,
  },
  title:{

  },
  titleTxt:{
    fontSize:HelperFunction.ModerateScale(18),
    fontFamily:Fonts.OpenSans_Bold,
  },
  paragraph:{
    marginTop:HelperFunction.VerticalScale(10),
    marginBottom:HelperFunction.VerticalScale(20),
  },
  paragraphTxt:{
    fontSize:HelperFunction.ModerateScale(15),
    fontFamily:Fonts.OpenSans,
    marginBottom:HelperFunction.VerticalScale(20),
    textAlign:'justify',
  },
});
