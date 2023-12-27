import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './CustomInput.styles';

export default function CustomInput(props: any) {
  // const { label } = props
  const {
    label,
    icon,
    placeholder,
    value,
    secureTextEntry,
    onInputChangeHandler,
    keyboardType,
    maxLength,
    placeholderTextColor,
    passwordLock,
    onPasswordLockPress,
    multiline,
    tintColor,
    editable,
    onInputPress,
    defaultValue,
    inputHeight,
    alignIcon,
    textAlignVertical,
  } = props;
  return (
    <View {...props}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.usernameTxt}>{label}</Text>
        <View style={[styles.inputContainer, {...props}]}>
          <Image
            source={icon}
            resizeMode="contain"
            style={[styles.icon, {tintColor: tintColor, alignSelf: alignIcon}]}
          />
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[styles.input, {height: inputHeight}]}
            autoCapitalize="none"
            keyboardType={keyboardType}
            onChangeText={onInputChangeHandler}
            multiline={multiline}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            value={value}
            editable={editable}
            defaultValue={defaultValue}
            textAlignVertical={textAlignVertical}
          />
          <TouchableOpacity onPress={onPasswordLockPress}>
            <View>
              <Image
                source={passwordLock}
                resizeMode="contain"
                style={styles.passwordLockicon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
