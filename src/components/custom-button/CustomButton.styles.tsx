import { StyleSheet } from "react-native";
import { FontSize } from "../../libs/FontSize";
import FONTS from "../../assets/fonts/Fonts";
import { COLORS } from "../../libs/Colors";
import { scale } from "../../libs/Scale";

export const styles = StyleSheet.create({
    container: {
        padding: scale(16),
        marginHorizontal: scale(24),
        borderRadius: 20,
    },
    btnTxt: {
        textAlign: "center",
        fontSize: FontSize.FONT_18Px,
        fontFamily: FONTS.OpenSansSemiBold,
        letterSpacing: -0.41,
    }
})