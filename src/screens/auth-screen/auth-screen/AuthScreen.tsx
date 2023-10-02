import { Animated, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './AuthScreen.styles'
import CustomButton from '../../../components/custom-button/CustomButton'
import { all_icons } from '../../../assets/images';
import { COLORS } from '../../../libs/Colors';

export default function AuthScreen(props: any) {
  const fadeIN = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeIn()
  }, [])

  const fadeIn = () => {
    Animated.timing(fadeIN, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const onSignupBtxClick = () => {
    props.navigation.navigate("user_signup")
  }

  const onLoginBtxClick = () => {
    props.navigation.navigate("user_login")
  }


  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.mainCoverContainer}>
        <Image source={all_icons.logo} style={styles.logo} resizeMode='contain' />
      </Animated.View>

      <View style={styles.authButtonContainer}>

        <Animated.View style={[styles.signupBtnView, { opacity: fadeIN }]}>
          <CustomButton
            label="Register"
            btnTxtColor={COLORS.black}
            btnBackgroundColor={COLORS.gray}
            onClick={() => onSignupBtxClick()}
          />
        </Animated.View>

        <Animated.View style={[styles.loginBtnView, { opacity: fadeIN }]}>
          <CustomButton
            label="Login"
            btnTxtColor={COLORS.white}
            btnBackgroundColor={COLORS.black}
            onClick={() => onLoginBtxClick()} />
        </Animated.View>
      </View>

    </SafeAreaView>
  )
}
