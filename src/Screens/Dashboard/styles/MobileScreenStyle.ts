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
    paddingVertical:HelperFunction.VerticalScale(5),
  },
  single: {
    flex: 1,
    maxWidth:HelperFunction.ModerateScale(175),
    backgroundColor: 'white',
    // backgroundColor: 'yellowgreen',

    // paddingHorizontal: HelperFunction.Scale(20),
    // marginHorizontal: HelperFunction.Scale(7),
    // marginVertical: HelperFunction.VerticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:HelperFunction.Scale(5),
  },
  bookmarkrow: {
    marginTop: HelperFunction.VerticalScale(10),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // backgroundColor:'yellowgreen',
    minHeight:HelperFunction.VerticalScale(35),
  },
  bookmarkIcon: {
    // color: Colors.borderColor,
    // position: 'absolute',
    // top: -145,
    // right: -92,
  },
  mainTitle: {
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(18),
    fontFamily: Fonts.OpenSans_Bold,
    // paddingLeft: HelperFunction.Scale(150),
    // paddingVertical: HelperFunction.VerticalScale(3),

  },
  brand: {
    color: Colors.text_color,
    // backgroundColor: 'red',
    textAlign:'center',

    fontSize: HelperFunction.ModerateScale(18),
    paddingHorizontal: HelperFunction.Scale(8),
    maxWidth:HelperFunction.ModerateScale(120),
    maxHeight:HelperFunction.VerticalScale(120),
    fontFamily: Fonts.OpenSans_Bold,
    textTransform: 'capitalize',
  },
  header: {
    textAlign: 'center',
    fontSize: HelperFunction.ModerateScale(20),
    fontFamily: Fonts.OpenSans_Bold,
    textTransform:'capitalize',

  },
  title: {
    color: Colors.borderColor,
    // backgroundColor: 'red',
    maxWidth:HelperFunction.ModerateScale(120),

    // paddingHorizontal: HelperFunction.Scale(18),
    // paddingBottom: HelperFunction.VerticalScale(2),
    // marginTop: HelperFunction.VerticalScale(3),
    // paddingTop: HelperFunction.VerticalScale(3),
    // marginBottom: HelperFunction.VerticalScale(-5),
    fontSize: HelperFunction.ModerateScale(15),
    fontFamily: Fonts.OpenSans,
    textTransform: 'capitalize',
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
    // backgroundColor: Colors.secondary_color,
  },
  btn: {
    backgroundColor: Colors.main_color,
    alignItems: 'center',
    paddingVertical: HelperFunction.VerticalScale(5),
    marginTop: HelperFunction.VerticalScale(5),
    marginBottom: HelperFunction.VerticalScale(5),
    // justifyContent:'center',
    // marginLeft: HelperFunction.Scale(135),
    // marginRight: 135,
    borderRadius: HelperFunction.ModerateScale(5),
  },
  loadmore: {
    paddingHorizontal: HelperFunction.Scale(120),
    // backgroundColor:'black',
  },
  btnTxt: {
    fontFamily: Fonts.OpenSans_Bold,
    color: Colors.button_text_color,
    fontSize: HelperFunction.ModerateScale(18),
  },
});

export default styles;
