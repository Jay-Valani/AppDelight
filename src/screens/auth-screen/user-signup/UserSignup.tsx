import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './UserSignup.styles'
import CustomInput from '../../../components/custom-input/CustomInput'
import { COLORS } from '../../../libs/Colors'
import CustomButton from '../../../components/custom-button/CustomButton'

export default function UserSignup(props: any){
  return (
    <View style={styles.container}>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTxt}>Welcome to <Text style={styles.appName}>App Delight</Text></Text>
        <Text style={styles.welcomeSubTxt}>Let's get started!</Text>
      </View>

      <View style={styles.bodyContainer}>
        <ScrollView>
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
          <CustomInput
            label="Confirm Password"
            placeholder="Enter Confirm Password"
            placeholderTextColor={COLORS.gray}
            style={{ marginTop: 15 }}
            keyboardType="none"
          />
        </ScrollView>
      </View>

      <View style={styles.registerBtn}>
        <CustomButton
          label="Register"
          btnTxtColor={COLORS.white}
          btnBackgroundColor={COLORS.black}
        />
        <Text style={styles.accountExist}>Already have a account?
          <Text style={styles.loginBtn} onPress={() => {props.navigation.navigate("user_login")}}>{"\t"}Login</Text>
        </Text>
      </View>

    </View>
  )
}
