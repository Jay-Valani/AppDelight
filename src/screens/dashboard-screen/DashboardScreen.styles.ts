import { StyleSheet } from "react-native";
import { COLORS } from "../../libs/Colors";
import { FontSize } from "../../libs/FontSize";
import FONTS from "../../assets/fonts/Fonts";
import { scale, verticalScale } from "../../libs/Scale";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    headerView: {
        flexDirection: "row",
        marginHorizontal: 10
    },
    menu: {
        height: 40,
        width: 40,
    },
    headerTxt: {
        flex: 1,
        fontSize: FontSize.FONT_24Px,
        fontFamily: FONTS.OpenSansSemiBold,
        color: COLORS.black,
        textAlign: 'center',
        marginRight: scale(40)
    }, 
    footerContainer: {
        flex: 1 ,
    },
    listContainer: {
        marginHorizontal: scale(24),
        marginTop: verticalScale(20)
    },
    productImage: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    productTitle: {
        fontSize: FontSize.FONT_16Px,
        fontFamily: FONTS.OpenSansSemiBold,
        color: COLORS.black,
    },
    productDescription: {
        fontSize: FontSize.FONT_16Px,
        fontFamily: FONTS.OpenSansSemiBold,
        color: COLORS.black,
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
})