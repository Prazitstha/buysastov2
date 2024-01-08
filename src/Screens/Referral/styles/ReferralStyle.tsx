import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {HelperFunction, Colors, Fonts} from '../../../Constants';

interface Styles {
  button: ViewStyle;
  buttonText: TextStyle;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: HelperFunction.ModerateScale(10),
  },
  referralContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:HelperFunction.VerticalScale(10),

  },
  title: {
    // textAlign: 'center',
    color: Colors.text_color,
    marginVertical: HelperFunction.VerticalScale(15),
    fontSize: HelperFunction.ModerateScale(17),

    fontFamily: Fonts.OpenSans_SemiBold,
    textTransform:'capitalize',
    // backgroundColor:'red',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: Colors.text_color,
  },
  inputLabel: {
    fontSize: HelperFunction.ModerateScale(16),
    marginVertical: HelperFunction.VerticalScale(8),
    fontFamily: Fonts.OpenSans,
  },
  inputInvalid: {
    borderColor: 'red', // Change border color to red
    // Add any other styles you want to apply for invalid input
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
  referralMessage: {
    color: '#FF5733', // Customize the color
    fontSize: 16,
    marginBottom: 10,
  },
  referralCodesContainer: {
    marginTop: 20,
  },
  referralTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  referralCode: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align modal to the bottom
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.main_color,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  messageText: {
    color: 'red',
  },
});
export default styles;
