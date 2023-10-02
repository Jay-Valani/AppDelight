import { Animated, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './AuthScreen.styles'
import CustomButton from '../../../components/custom-button/CustomButton'
import { all_icons } from '../../../assets/images';

export default function AuthScreen() {
  const fadeIN = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeIn()
  }, [])

  const fadeIn = () => {
    Animated.timing(fadeIN, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.mainCoverContainer}>
        <Image source={all_icons.logo} style={styles.logo} resizeMode='contain' />
      </Animated.View>

      <View style={styles.authButtonContainer}>

        <Animated.View style={[styles.signupBtnView, { opacity: fadeIN }]}>
          <CustomButton label="Signup" />
        </Animated.View>

        <Animated.View style={[styles.loginBtnView, { opacity: fadeIN }]}>
          <CustomButton label="Login" />
        </Animated.View>
      </View>

    </SafeAreaView>
  )
}
