import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './UserLogin.styles'
import CustomInput from '../../../components/custom-input/CustomInput'
import { COLORS } from '../../../libs/Colors'
import CustomButton from '../../../components/custom-button/CustomButton'

export default function UserLogin(props: any) {
  return (
    <View style={styles.container}>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTxt}>Welcome back to <Text style={styles.appName}>App Delight</Text></Text>
        <Text style={styles.welcomeSubTxt}>You have been missed!</Text>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <CustomInput
            label="E-mail"
            placeholder="Enter your Email ID"
            placeholderTextColor={COLORS.gray}
            keyboardType="email-address"
          />
          <CustomInput
            label="Password"
            placeholder="Enter Password"
            placeholderTextColor={COLORS.gray}
            style={{ marginTop: 15 }}
            keyboardType="none"
          />
          <Text style={styles.forgotPassword} onPress={() => { }}>Forgot Password?</Text>
        </View>
      </View>

      <View style={styles.registerBtn}>
        <CustomButton
          label="Login"
          btnTxtColor={COLORS.white}
          btnBackgroundColor={COLORS.black}
        />
        <Text style={styles.accountExist}>Don't have an account?
          <Text style={styles.loginBtn} onPress={() => { props.navigation.navigate("user_signup") }}>{"\t"}Signup</Text>
        </Text>
      </View>

    </View>
  )
}
