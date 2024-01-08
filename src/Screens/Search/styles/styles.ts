import {StyleSheet} from 'react-native';

import {Colors, Fonts, HelperFunction} from '../../../Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background_color,
    // backgroundColor:'red',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.borderColor,
    // backgroundColor:'orange',
    marginHorizontal: HelperFunction.Scale(15),
    marginTop: HelperFunction.VerticalScale(10),
    borderRadius: HelperFunction.ModerateScale(5),
  },
  searchButton: {
    height: HelperFunction.VerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.main_color,
    paddingHorizontal: HelperFunction.Scale(10),
    borderRadius: HelperFunction.ModerateScale(5),
  },
  searchInput: {
    flex: 1,
    height: HelperFunction.VerticalScale(40),
    fontFamily: Fonts.OpenSans,
    fontSize: HelperFunction.ModerateScale(14),
    marginHorizontal: HelperFunction.Scale(10),
    paddingVertical: HelperFunction.VerticalScale(2),
  },
  // main: {
  //   flex: 1,
  //   flexWrap: 'wrap',
  // },
  // pickerContainer: {
  //   height: HelperFunction.VerticalScale(40),
  //   marginHorizontal: HelperFunction.Scale(15),
  //   marginTop: HelperFunction.VerticalScale(20),
  //   marginBottom: HelperFunction.VerticalScale(10),
  //   borderRadius: HelperFunction.ModerateScale(5),

  // },

  textcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.secColor,
    fontSize: HelperFunction.ModerateScale(18),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  searchResult: {
    flex: 1,
    // backgroundColor:'yellowgreen',
    paddingHorizontal:HelperFunction.Scale(5),
    paddingVertical:HelperFunction.VerticalScale(10),
    
    // flexWrap: 'wrap',

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

    // backgroundColor:'yellow',
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

    // backgroundColor:'yellowgreen',
  },
  image: {
    width: HelperFunction.Scale(100),
    height: HelperFunction.VerticalScale(100),
    marginTop: HelperFunction.VerticalScale(10),
    resizeMode: 'contain',
    maxHeight:HelperFunction.Scale(100)
    // backgroundColor: Colors.secondary_color,
  },
  single: {
    flex: 1,
    // width:HelperFunction.Scale(155),
    // height:HelperFunction.VerticalScale(200),
    borderRadius:HelperFunction.Scale(5),
    backgroundColor: '#ffffff',
    // backgroundColor: 'purple',
    maxWidth:HelperFunction.ModerateScale(175),
    // width:HelperFunction
    paddingHorizontal: HelperFunction.Scale(30),
    marginHorizontal: HelperFunction.Scale(4),
    marginVertical: HelperFunction.VerticalScale(7),
    alignItems: 'center',
    justifyContent: 'center',

  },
  price: {
    fontSize: HelperFunction.ModerateScale(15),
    fontFamily: Fonts.OpenSans_Bold,
    color: Colors.main_color,
    marginTop: HelperFunction.VerticalScale(3),
    marginBottom: HelperFunction.VerticalScale(5),
  },
  empty: {
    fontSize: HelperFunction.ModerateScale(14),
    fontFamily: Fonts.OpenSans_SemiBold,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: HelperFunction.VerticalScale(50),
    color: Colors.main_color,
  },
  // main: {

  //   backgroundColor: 'black',
  //   // paddingHorizontal:20,
  //   // paddingVertical:5,
  //   // // marginLeft:10,

  //   // // width:'45%',
  //   flexWrap: 'wrap',
  // },
});
