import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './CustomButton.styles'

export default function CustomButton(props: any) {
  const { label, onClick, btnBackgroundColor, btnTxtColor } = props
  return (
    <>
      <TouchableOpacity onPress={onClick}>
        <View style={[styles.container, {backgroundColor: btnBackgroundColor}]}>
          <Text style={[styles.btnTxt, {color: btnTxtColor}]}>{label}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}