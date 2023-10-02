import { StyleSheet } from "react-native";
import { FontSize } from "../../libs/FontSize";
import FONTS from "../../assets/fonts/Fonts";
import { COLORS } from "../../libs/Colors";
import { scale } from "../../libs/Scale";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.darkBlue,
        padding: scale(16),
        marginHorizontal: scale(24),
        borderWidth: 0.1,
        borderRadius: 20,
        borderColor: COLORS.darkBlue
    },
    btnTxt: {
        textAlign: "center",
        fontSize: FontSize.FONT_18Px,
        fontFamily: FONTS.OpenSansSemiBold,
        letterSpacing: -0.41,
        color: COLORS.white
    }
})