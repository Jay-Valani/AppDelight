import {StyleSheet} from 'react-native';
import {COLORS} from '../../libs/Colors';
import {FontSize} from '../../libs/FontSize';
import FONTS from '../../assets/fonts/Fonts';
import {scale, verticalScale} from '../../libs/Scale';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)',
      },
      modalView: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        paddingBottom: 20,
        paddingTop: 20
      },
});
