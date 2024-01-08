import {StyleSheet} from 'react-native';
import {HelperFunction, Colors, Fonts} from '../../../Constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondaryContainer: {
    flex: 1,
    // backgroundColor: Colors.borderColor,
  },
  childOneViewContainer: {
    paddingHorizontal: HelperFunction.Scale(10),
    // backgroundColor: Colors.main_color,
  
  },
  bookmarkView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal:HelperFunction.Scale(3),
    // backgroundColor: Colors.main_color,
    minHeight:HelperFunction.VerticalScale(30),
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: HelperFunction.VerticalScale(5),
    // backgroundColor: '#fff8dc',
    // maxHeight:HelperFunction.VerticalScale(800),
  },
  cardImage: {
    width: HelperFunction.Scale(350),
    height: HelperFunction.VerticalScale(300),
    resizeMode: 'contain',
    // backgroundColor: '#9932cc',
  },
  brandLogo:{
    width: HelperFunction.Scale(100),
    height: HelperFunction.VerticalScale(45),
    resizeMode: 'contain',
    // backgroundColor: '#9932cc',

  },
  midDescriptionContainer:{
    // backgroundColor:'#b0e0e6',
    alignItems:'center',
    marginVertical:HelperFunction.VerticalScale(5),
    paddingVertical:HelperFunction.VerticalScale(3),
  },
  productName:{
fontSize:HelperFunction.ModerateScale(25),
    fontFamily:Fonts.OpenSans_SemiBold,
    textTransform:'capitalize',

  },
  startsAt:{
    fontSize:15,
    fontFamily:Fonts.OpenSans,
    // paddingVertical:HelperFunction.VerticalScale(5)
  },
  productPrice:{
    fontSize:HelperFunction.ModerateScale(22),
    fontFamily:Fonts.OpenSans_Bold,
    // textTransform:'capitalize',
    color:Colors.main_color,
  },
  brandText:{
    fontSize:HelperFunction.ModerateScale(28),
    fontFamily:Fonts.OpenSans_SemiBold,
    textTransform:'capitalize',
    color:Colors.borderColor,
  },
  viewEyeContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    //
    // backgroundColor:'#fff5ee',
  },
  eyeIcons:{
    fontSize:HelperFunction.ModerateScale(25),
    marginRight:HelperFunction.Scale(3),
    // marginLeft:HelperFunction.Scale(3),

  },
  productView:{
    fontSize:HelperFunction.ModerateScale(15),
    fontFamily:Fonts.OpenSans_SemiBold,
    textTransform:'capitalize',
    marginLeft:HelperFunction.Scale(7),

  },
  productBrand:{
    fontSize:HelperFunction.ModerateScale(23),
    fontFamily:Fonts.OpenSans,
    textTransform:'capitalize',
    marginTop:HelperFunction.VerticalScale(5),
  },
  descriptionContainer:{
    // backgroundColor: "yellowgreen",
    marginTop:HelperFunction.VerticalScale(15),
    // paddingHorizontal:HelperFunction.Scale(2),
    // paddingVertical:HelperFunction.VerticalScale(2),
    // borderColor:Colors.borderColor,
    // borderRadius:HelperFunction.Scale(5),
    // marginBottom:HelperFunction.VerticalScale(5),

  },
  descriptionText:{
// marginVertical:HelperFunction.VerticalScale(5),
fontSize:HelperFunction.ModerateScale(15),
textAlign:'justify',
fontFamily:Fonts.OpenSans,
margin:3,
  },
  childtwoViewContainer:{
    paddingHorizontal: HelperFunction.Scale(10),
    marginVertical:HelperFunction.VerticalScale(30),
    // backgroundColor: '#ffff00',
  },
  BestDeals: {

    flexDirection:'row',
    justifyContent:'space-between',
    // alignItems:'center',
    // backgroundColor: 'yellow',
    paddingHorizontal:HelperFunction.ModerateScale(3),
    marginVertical:HelperFunction.VerticalScale(5),
    // marginHorizontal:HelperFunction.Scale(8),


  },
  scrollViewContainer:{
flexDirection:'row',
justifyContent:'flex-end',
// backgroundColor:'yellow',
alignItems:'center',
// marginLeft:55,
  },
  scrollText:{
    fontSize:HelperFunction.ModerateScale(13),
    fontFamily:Fonts.OpenSans,

  },
  scrollimage:{
    width: HelperFunction.Scale(50),
    height: HelperFunction.VerticalScale(25),
    resizeMode: 'contain',


  },
  BestDealsimage:{
    width: HelperFunction.Scale(120),
    height: HelperFunction.VerticalScale(30),
    resizeMode: 'contain',

    // backgroundColor: 'yellowgreen',

  },
  compareViewContainer:{
paddingHorizontal:HelperFunction.Scale(5),
marginBottom:HelperFunction.VerticalScale(10),
// backgroundColor:'#ff6347',
  },



  boxViewContainer:{
    justifyContent:'center',
    width:HelperFunction.Scale(155),
  height:HelperFunction.VerticalScale(190),
// backgroundColor:'#d8bfd8',
borderColor:'black',
borderWidth:HelperFunction.Scale(1),
borderRadius:HelperFunction.Scale(5),
paddingHorizontal:HelperFunction.Scale(10),
// paddingVertical:HelperFunction.VerticalScale(20),



  },
  innerboxViewContainer:{
      // backgroundColor:'#9acd32',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:HelperFunction.VerticalScale(2),
// paddingVertical:HelperFunction.VerticalScale(20),

  },
  sastoimage:{
    // marginTop: HelperFunction.VerticalScale(10),
    // marginBottom: HelperFunction.VerticalScale(10),

    width: HelperFunction.Scale(135),
    height: HelperFunction.VerticalScale(50),
    // backgroundColor: Colors.main_color,
    resizeMode: 'contain',

  },
  darazimage:{
    // marginTop: HelperFunction.VerticalScale(10),
    // marginBottom: HelperFunction.VerticalScale(10),

    width: HelperFunction.Scale(90),
    height: HelperFunction.VerticalScale(50),
    // backgroundColor: Colors.main_color,
    resizeMode: 'contain',

  },
  empty:{
paddingHorizontal:HelperFunction.Scale(10),
  },

  type:{
    fontSize:HelperFunction.Scale(12),
    textTransform:'capitalize',
    fontFamily:Fonts.OpenSans,
    
      },
      priceTitle:{
        fontSize:HelperFunction.Scale(12),
        // textTransform:'capitalize',
        fontFamily:Fonts.OpenSans,
      },
      price:{
        fontSize:HelperFunction.Scale(15),
        // textTransform:'capitalize',
        color:Colors.main_color,
        fontFamily:Fonts.OpenSans_SemiBold,
      },
});

export default styles;
