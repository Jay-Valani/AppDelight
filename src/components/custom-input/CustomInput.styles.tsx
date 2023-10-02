import { Platform, StyleSheet } from "react-native";
import { FontSize } from "../../libs/FontSize";
import FONTS from "../../assets/fonts/Fonts";
import { COLORS } from "../../libs/Colors";
import { scale, verticalScale } from "../../libs/Scale";

// export const styles = StyleSheet.create({
//     container: {
//         padding: scale(16),
//         marginHorizontal: scale(24),
//         borderRadius: 20,
//     },
// })

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    usernameTxt: {
        fontSize: FontSize.FONT_17Px,
        marginHorizontal: 16,
        fontFamily: FONTS.OpenSansSemiBold,
        color: COLORS.black,
        // marginTop: scale(20),
    },
    icon: {
        height: 24,
        width: 24,
        alignSelf: 'center',
    },
    inputContainer: {
        borderWidth: 0.7,
        marginHorizontal: scale(15),
        borderRadius: scale(8),
        paddingHorizontal: scale(12),
        paddingVertical:
            Platform.OS === 'ios' ? verticalScale(16) : verticalScale(3),
        marginTop: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.white,
    },
    input: {
        color: COLORS.gray,
        fontSize: FontSize.FONT_16Px,
        fontFamily: FONTS.OpenSansRegular,
        flex: 1,
        marginLeft: scale(10),
        letterSpacing: 0,
    },
    passwordLockicon: {
        height: scale(22),
        width: scale(22),
        marginVertical:
            Platform.OS === 'android' ? verticalScale(10) : verticalScale(0),
    },
});