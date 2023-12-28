import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './UserLogin.styles';
import CustomInput from '../../../components/custom-input/CustomInput';
import {COLORS} from '../../../libs/Colors';
import CustomButton from '../../../components/custom-button/CustomButton';
import {emailRegex, passwordRegex} from '../../../constants/Regex';
import auth from '@react-native-firebase/auth';

export default function UserLogin(props: any) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onEmailInputChangeTxt = (text: any) => {
    setEmailInput(text);
  };
  const onPasswordInputChangeTxt = (text: any) => {
    setPasswordInput(text);
  };

  const loginFirebaseDB = () => {
    auth()
      .signInWithEmailAndPassword(emailInput, passwordInput)
      .then(res => {
        Platform.OS == 'android'
          ? ToastAndroid.show(
              'User signed in successfully!',
              ToastAndroid.SHORT,
            )
          : Alert.alert('User signed in successfully!');
        setEmailInput('');
        setPasswordInput('');
        props.navigation.navigate('dashboard');
      })
      .catch(error => console.error('Error!', error));
  };

  const onLoginBtnClick = () => {
    if (emailRegex.test(emailInput) === false || emailInput.length === 0) {
      Platform.OS == 'android'
        ? ToastAndroid.show('Please enter a valid email!', ToastAndroid.SHORT)
        : Alert.alert('Please enter a valid email!');
    } else if (
      passwordRegex.test(passwordInput) === false ||
      passwordInput.length === 0
    ) {
      Platform.OS == 'android'
        ? ToastAndroid.show(
            'Your password must contain uppercase, lower case, number and special characters!',
            ToastAndroid.SHORT,
          )
        : Alert.alert(
            'Your password must contain uppercase, lower case, number and special characters!',
          );
    } else {
      loginFirebaseDB();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTxt}>
          Welcome back to <Text style={styles.appName}>App Delight</Text>
        </Text>
        <Text style={styles.welcomeSubTxt}>You have been missed!</Text>
      </View>

      <KeyboardAvoidingView style={styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <CustomInput
            label="E-mail"
            placeholder="Enter your Email ID"
            placeholderTextColor={COLORS.gray}
            keyboardType="email-address"
            value={emailInput}
            onInputChangeHandler={(text: any) => onEmailInputChangeTxt(text)}
          />
          <CustomInput
            label="Password"
            placeholder="Enter Password"
            placeholderTextColor={COLORS.gray}
            style={{marginTop: 15}}
            keyboardType="default"
            value={passwordInput}
            onInputChangeHandler={(text: any) => onPasswordInputChangeTxt(text)}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.registerBtn}>
        <CustomButton
          label="Login"
          btnTxtColor={COLORS.white}
          btnBackgroundColor={COLORS.black}
          onClick={() => onLoginBtnClick()}
        />
        <Text style={styles.accountExist}>
          Don't have an account?
          <Text
            style={styles.loginBtn}
            onPress={() => {
              props.navigation.navigate('user_signup');
            }}>
            {'\t'}Signup
          </Text>
        </Text>
      </View>
    </View>
  );
}
