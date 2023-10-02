import { StyleSheet } from "react-native";
import { COLORS } from "../../../libs/Colors";
import { FontSize } from "../../../libs/FontSize";
import FONTS from "../../../assets/fonts/Fonts";
import { scale, verticalScale } from "../../../libs/Scale";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: "center"
    },
    welcomeTxt: {
        fontSize: FontSize.FONT_24Px,
        fontFamily: FONTS.OpenSansSemiBold,
        letterSpacing: -0.41,
        marginHorizontal: scale(24),
        color: COLORS.gray
    },
    appName: {
        fontSize: FontSize.FONT_24Px,
        fontFamily: FONTS.OpenSansBold,
        letterSpacing: -0.41,
        marginHorizontal: scale(24),
        color: COLORS.black
    },
    welcomeSubTxt: {
        fontSize: FontSize.FONT_18Px,
        fontFamily: FONTS.OpenSansSemiBold,
        letterSpacing: -0.41,
        marginHorizontal: scale(24),
        color: COLORS.gray,
        marginTop: verticalScale(8)
    },
    bodyContainer: {
        flex: 2,
    },
    inputContainer: {
        marginTop: verticalScale(30)
    },
    forgotPassword: {
        fontSize: FontSize.FONT_14Px,
        fontFamily: FONTS.OpenSansRegular,
        letterSpacing: -0.41,
        marginHorizontal: scale(24),
        color: COLORS.gray,
        marginTop: verticalScale(10),
        textAlign: "right"
    },
    registerBtn: {
        flex: 0.5,
    },
    accountExist: {
        fontSize: FontSize.FONT_14Px,
        fontFamily: FONTS.OpenSansRegular,
        letterSpacing: -0.41,
        marginHorizontal: scale(24),
        color: COLORS.gray,
        marginTop: verticalScale(10),
        textAlign: "center"
    },
    loginBtn: {
        fontSize: FontSize.FONT_14Px,
        fontFamily: FONTS.OpenSansSemiBold,
        letterSpacing: -0.41,
        color: COLORS.black,
        marginTop: verticalScale(10)
    }
})