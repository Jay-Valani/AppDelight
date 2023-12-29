import {StyleSheet} from 'react-native';
import {COLORS} from '../../libs/Colors';
import {FontSize} from '../../libs/FontSize';
import FONTS from '../../assets/fonts/Fonts';
import {scale, verticalScale} from '../../libs/Scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  footerContainer: {
    flex: 1,
    marginTop: verticalScale(20),
  },
  productImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  errorMsg: {
    fontSize: FontSize.FONT_21Px,
    fontFamily: FONTS.OpenSansSemiBold,
    color: COLORS.gray,
    textAlign: 'center',
  },
  productContainer: {
    marginHorizontal: scale(10),
    flexDirection: 'row',
    marginTop: 30,
  },
  txtContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: FontSize.FONT_13Px,
    fontFamily: FONTS.OpenSansBold,
    color: COLORS.black,
  },
  desc: {
    fontSize: FontSize.FONT_12Px,
    fontFamily: FONTS.OpenSansRegular,
    color: COLORS.gray,
    marginTop: verticalScale(5),
  },
  moreIcon: {
    height: 20,
    width: 20,
    transform: [{rotate: '90deg'}],
    justifyContent: 'flex-end',
    // marginLeft: scale(25),
    marginTop: verticalScale(5),
  },
  modalViewContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 24,
    width: '100%',
  },
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalTxt: {
    fontSize: FontSize.FONT_16Px,
    fontFamily: FONTS.OpenSansSemiBold,
    color: COLORS.black,
  },
});
