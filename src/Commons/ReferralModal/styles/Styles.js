import {StyleSheet} from 'react-native';

import {Colors, Fonts, HelperFunction} from '../../../Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.background_color,
    marginHorizontal: HelperFunction.Scale(30),
    borderRadius: HelperFunction.ModerateScale(4),
    borderColor: Colors.borderColor,
    borderWidth: 0.5,
  },
  title: {
    textAlign: 'center',
    color: Colors.text_color,
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
    marginVertical: HelperFunction.VerticalScale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: HelperFunction.VerticalScale(20),
  },
  btn: {
    width: HelperFunction.Scale(70),
    paddingVertical: HelperFunction.VerticalScale(5),
    borderRadius: HelperFunction.ModerateScale(5),
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginLeft: 20,
    color: Colors.text_color,
  },
  inputInvalid: {
    borderColor: 'red', // Change border color to red
    // Add any other styles you want to apply for invalid input
  },
  messageText: {
    color: 'red',
    marginLeft: 80,
    paddingBottom: 10,
    // marginBottom:10,
  },
});
