import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './CustomButton.styles'

export default function CustomButton(props: any) {
    const {label} = props
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  )
}