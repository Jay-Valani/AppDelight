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
  headerView: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  menu: {
    height: 30,
    width: 30,
  },
  headerTxt: {
    flex: 1,
    fontSize: FontSize.FONT_21Px,
    fontFamily: FONTS.OpenSansSemiBold,
    color: COLORS.black,
    textAlign: 'center',
    marginRight: scale(30),
    marginBottom: verticalScale(8)
  },
  footerContainer: {
    flex: 1,
    backgroundColor: COLORS.offWhite
  },
  listContainer: {
    marginHorizontal: scale(24),
    marginTop: verticalScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10
  },
  imageComponent: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between'
  },
  productImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: scale(10)
  },
  favoriteIcon: {
    height: 25,
    width: 25,
    justifyContent: "flex-end",
    marginTop: verticalScale(10),
    right: scale(10),
  },
  productTitle: {
    fontSize: FontSize.FONT_14Px,
    fontFamily: FONTS.OpenSansSemiBold,
    color: COLORS.black,
    marginTop: verticalScale(10),
  },
  productDescription: {
    fontSize: FontSize.FONT_13Px,
    fontFamily: FONTS.OpenSansSemiBold,
    color: COLORS.black,
  },
  productComponents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  productPrice: {
    fontSize: FontSize.FONT_16Px,
    fontFamily: FONTS.OpenSansSemiBold,
    color: COLORS.black,
  },
  productRating: {
    fontSize: FontSize.FONT_16Px,
    fontFamily: FONTS.OpenSansSemiBold,
    color: COLORS.black,
  },
});
