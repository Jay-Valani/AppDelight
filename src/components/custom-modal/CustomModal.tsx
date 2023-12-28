import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {Component} from 'react';
import { styles } from './CustomModal.styles';

const height = Dimensions.get('screen');

export default function CustomModal(props: any) {
  const {visible, onClose} = props;
  return (
    <KeyboardAvoidingView behavior="height">
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onClose}>
        <TouchableOpacity onPress={onClose} style={styles.centeredView} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={styles.modalView}>
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}>
              {props.modalView}
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableOpacity onPress={onClose} style={styles.centeredView} />
      </Modal>
    </KeyboardAvoidingView>
  );
}
