import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './CustomHeader.styles';
import {all_icons} from '../../assets/images';

export default function CustomHeader(props: any) {
  const {arrow_left, arrow_right, title, arrow_right_icon, rightIconShow} =
    props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerComponent}>
        <TouchableOpacity onPress={arrow_left}>
          <Image source={all_icons.back_icon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        {rightIconShow === true ? (
          <TouchableOpacity onPress={arrow_right}>
            <Image source={arrow_right_icon} style={styles.backIcon} />
          </TouchableOpacity>
        ) : (
          <View style={styles.rightIconShown} />
        )}
      </View>
    </SafeAreaView>
  );
}
