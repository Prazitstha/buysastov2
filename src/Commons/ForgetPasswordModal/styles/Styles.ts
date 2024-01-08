import {StyleSheet} from 'react-native';
import Elevations from 'react-native-elevation';

import {Colors, Fonts, HelperFunction} from '../../../Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.background_color,
    marginHorizontal: HelperFunction.Scale(30),
    borderRadius: HelperFunction.ModerateScale(4),
    ...Elevations[5],
  },
  header: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: HelperFunction.Scale(20),
    marginTop: HelperFunction.Scale(10),
  },
  closeBtn: {
    alignSelf: 'flex-end',
  },
  subContainer: {
    marginHorizontal: HelperFunction.Scale(20),
    paddingHorizontal: HelperFunction.Scale(15),
    paddingVertical: HelperFunction.VerticalScale(20),
    borderRadius: HelperFunction.ModerateScale(5),
    // marginBottom:  HelperFunction.VerticalScale(100),
  },
  subtitle: {
    color: Colors.secondary_color,
    fontSize: HelperFunction.ModerateScale(18),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  inputGroup: {
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
    backgroundColor: '#fff',
    paddingHorizontal: HelperFunction.Scale(10),
    borderColor: '#999',
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
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.main_color,
    paddingHorizontal: HelperFunction.Scale(30),
    paddingVertical: HelperFunction.VerticalScale(7),
    borderRadius: HelperFunction.ModerateScale(5),
    marginVertical: HelperFunction.VerticalScale(15),
  },
  buttonText: {
    color: '#fff',
    fontSize: HelperFunction.ModerateScale(16),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  text: {
    textAlign: 'center',
    color: '#999',
    fontSize: HelperFunction.ModerateScale(15),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
  errorText: {
    color: Colors.main_color,
    fontSize: HelperFunction.ModerateScale(14),
    marginTop: HelperFunction.VerticalScale(10),
    fontFamily: Fonts.OpenSans_SemiBold,
  },
});
