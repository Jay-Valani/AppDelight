import {Dimensions} from 'react-native';
import {scale} from './Scale';

const FontSize = {
  FONT_5Px: scale(5),
  FONT_10Px: scale(10),
  FONT_11Px: scale(11),
  FONT_14Px: scale(14),
  FONT_16Px: scale(16),
  FONT_18Px: scale(18),
  FONT_17Px: scale(17),
  FONT_12Px: scale(12),
  FONT_13Px: scale(13),
  FONT_20Px: scale(20),
  FONT_21Px: scale(21),
  FONT_24Px: scale(24),
  FONT_15Px: scale(15),
  FONT_30Px: scale(30),
  FONT_28Px: scale(28),
  FONT_91Px: scale(91),
};

const ViewDimensions = {
  WIDTH_251Px: scale(251),
  WIDTH: Dimensions.get('screen').width,
  HEIGHT: Dimensions.get('screen').height,
};

export {FontSize, ViewDimensions};
