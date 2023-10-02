import { StyleSheet } from "react-native";
import { COLORS } from "../../../libs/Colors";
import { verticalScale } from "../../../libs/Scale";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    mainCoverContainer: {
        flex: 3,
        justifyContent: 'center',
    },
    authButtonContainer: {
        flex: 1,
    },
    logo: {
        height: 600,
        width: 600,
        alignSelf: 'center',
    },
    signupBtnView: {
        marginTop: verticalScale(10),
    },
    loginBtnView: {
        marginTop: verticalScale(10)
    }
})