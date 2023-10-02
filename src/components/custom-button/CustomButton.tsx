import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './CustomButton.styles'

export default function CustomButton(props: any) {
  const { label, onClick } = props
  return (
    <>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.container}>
          <Text style={styles.btnTxt}>{label}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}