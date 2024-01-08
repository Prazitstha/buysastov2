import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// const BASE_URL = 'http://192.168.1.119:8080'; 
// const BASE_URL = 'http://192.168.0.105:8080';
const BASE_URL = 'http://192.168.1.64:8080';

// 192.168.1.65  mine home
// 192.168.1.119 office localhost
// http://192.168.1.64:8080 main server

// Horizontal Scale
const Scale = (size: number): number => (width / guidelineBaseWidth) * size;

// Vertical Scale
const VerticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

// Moderate Scale
const ModerateScale = (size: number, factor = 0.5): number =>
  size + (Scale(size) - size) * factor;

const ValidEmail = (email: string): boolean => {
  const checker =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return checker.test(email);
};

export default {
  Scale,
  VerticalScale,
  ModerateScale,
  BASE_URL,
  ValidEmail,
};
