import {StyleSheet} from 'react-native';
import {HelperFunction, Colors, Fonts} from '../../../Constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // backgroundColor: 'orange',

  },
  main: {
    flex: 1,
    // backgroundColor: 'wheat',
    // flexWrap: 'wrap',
    paddingHorizontal:HelperFunction.Scale(5),
    paddingVertical:HelperFunction.VerticalScale(10),
  },
  single: {
    flex: 1,
    // width:HelperFunction.Scale(155),
    // height:HelperFunction.VerticalScale(200),
    borderRadius:HelperFunction.Scale(5),
    backgroundColor: '#ffffff',
    // backgroundColor: 'yellowgreen',
    maxWidth:HelperFunction.ModerateScale(175),
    // width:HelperFunction
    // paddingHorizontal: HelperFunction.Scale(20),
    // marginHorizontal: HelperFunction.Scale(7),
    // marginVertical: HelperFunction.VerticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkrow: {
    // position:'absolute',
    marginTop: HelperFunction.VerticalScale(10),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // backgroundColor:'green',
    minHeight:HelperFunction.VerticalScale(35),
  },
bookmarkContainer: {
  // flexDirection: 'row',
  // alignItems: 'center',
  // backgroundColor:'green',

},

 
  brand: {
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(18),
    paddingHorizontal: HelperFunction.Scale(8),
    fontFamily: Fonts.OpenSans_Bold,
    textAlign:'center',
    textTransform: 'capitalize',
    
    // backgroundColor:'red',
    maxWidth:HelperFunction.ModerateScale(120),

  },
  title: {
    color: Colors.borderColor,
    paddingHorizontal: HelperFunction.Scale(18),
    paddingBottom: HelperFunction.VerticalScale(2),
    marginTop: HelperFunction.VerticalScale(3),
    paddingTop: HelperFunction.VerticalScale(3),
    marginBottom: HelperFunction.VerticalScale(-5),
    fontSize: HelperFunction.ModerateScale(15),
    fontFamily: Fonts.OpenSans,
    textTransform: 'capitalize',
    maxWidth:HelperFunction.ModerateScale(120),

  },
  price: {
    fontSize: HelperFunction.ModerateScale(15),
    fontFamily: Fonts.OpenSans_Bold,
    color: Colors.main_color,
    marginTop: HelperFunction.VerticalScale(3),
    marginBottom: HelperFunction.VerticalScale(5),
    maxWidth:HelperFunction.ModerateScale(120),

  },

  image: {
    width: HelperFunction.Scale(100),
    height: HelperFunction.VerticalScale(100),
    marginTop: HelperFunction.VerticalScale(10),
    resizeMode: 'contain',
    // backgroundColor: 'yellow',
  },
  btn: {
    // backgroundColor: Colors.main_color,
    alignItems: 'center',
    paddingVertical: HelperFunction.VerticalScale(3),
    marginTop: HelperFunction.VerticalScale(5),
    marginBottom: HelperFunction.VerticalScale(5),
    // justifyContent:'center',
    // marginLeft: HelperFunction.Scale(135),
    // marginRight: 135,
    borderColor:Colors.main_color,
    borderWidth:1,
    borderRadius: HelperFunction.ModerateScale(5),
  },
  mainTitle: {
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(18),
    fontFamily: Fonts.OpenSans_Bold,
    textTransform:'capitalize',
    // paddingLeft: HelperFunction.Scale(140),
    paddingVertical: HelperFunction.VerticalScale(3),
    // marginTop: HelperFunction.VerticalScale(10),
  },
  titleLoadmore:{
    alignItems:'center',
flexDirection:'row',
justifyContent:'space-between',
marginTop: HelperFunction.VerticalScale(8),
paddingHorizontal:HelperFunction.ModerateScale(10),

  },
  loadmore: {
    paddingHorizontal: HelperFunction.Scale(100),
    // marginTop: HelperFunction.VerticalScale(10),

    // backgroundColor:'black',
  },
  btnTxt: {
    fontFamily: Fonts.OpenSans_Bold,
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(12),
  },
});

export default styles;
