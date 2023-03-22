import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from './src/libs/Colors';
import {FontSize} from './src/libs/FontSize';
import FONTS from './src/assets/fonts/Fonts';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTxt}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  appTxt: {
    fontSize: FontSize.FONT_21Px,
    fontFamily: FONTS.OpenSansBoldItalic,
  },
});
