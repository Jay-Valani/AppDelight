import {Dimensions, Platform} from 'react-native';
import {IOS} from './Constant';

const {height, width} = Dimensions.get('window');
// Screen Constants
// 390 and 844 are constants, check from FIGMA

const guidelineBaseWidth = width >= 768 ? 768 : 390;
const guidelineBaseHeight =
  Platform.OS === IOS
    ? height >= 1024
      ? 1024
      : 844
    : height <= 550
    ? 667
    : height;
/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */

const scale = (size: number) => Math.ceil((width / guidelineBaseWidth) * size);
const verticalScale = (size: number) =>
  Math.ceil((height / guidelineBaseHeight) * size);
const moderateScale = (size: number, factor = 0.5) =>
  Math.ceil(size + (scale(size) - size) * factor);
const moderateVerticalScale = (size: number, factor = 0.5) =>
  Math.ceil(size + (verticalScale(size) - size) * factor);
const isIpad = () => width >= 768;
const isSmallDevice = () => height <= 570;

export {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  isIpad,
  isSmallDevice,
};
