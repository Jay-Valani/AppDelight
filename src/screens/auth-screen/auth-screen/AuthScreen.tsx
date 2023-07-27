import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './AuthScreen.styles'
import CustomButton from '../../../components/custom-button/CustomButton'

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainCoverContainer}>
        <Text>App Delight</Text>
      </View>

      <View style={styles.authButtonContainer}>
        <CustomButton label="Login" />
      </View>

    </SafeAreaView>
  )
}
