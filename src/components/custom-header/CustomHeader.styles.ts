import {StyleSheet} from 'react-native';
import {COLORS} from '../../libs/Colors';
import {FontSize} from '../../libs/FontSize';
import FONTS from '../../assets/fonts/Fonts';
import {scale, verticalScale} from '../../libs/Scale';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.white,
  },
  headerComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(24),
  },
  backIcon: {
    height: 20,
    width: 20,
    marginTop: verticalScale(5)
  },
  title: {
    fontSize: FontSize.FONT_21Px,
    fontFamily: FONTS.OpenSansSemiBold,
    color: COLORS.black,
    textAlign: "center"
  },
  rightIconShown: {
    marginHorizontal: scale(10)
  }
});
