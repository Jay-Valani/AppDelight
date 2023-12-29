import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './UserSignup.styles';
import CustomInput from '../../../components/custom-input/CustomInput';
import {COLORS} from '../../../libs/Colors';
import CustomButton from '../../../components/custom-button/CustomButton';
import {emailRegex, passwordRegex} from '../../../constants/Regex';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserSignup(props: any) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [result, setResult] = useState([]);

  const onEmailInputChangeTxt = (text: any) => {
    setEmailInput(text);
  };
  const onPasswordInputChangeTxt = (text: any) => {
    setPasswordInput(text);
  };
  const onConfirmPasswordInputChangeTxt = (text: any) => {
    setConfirmPasswordInput(text);
  };

  const firebaseDB = async () => {
    try {
      await auth()
        .createUserWithEmailAndPassword(emailInput, passwordInput)
        .then((res: any) => {
          setResult(res);
          console.log(
            'created user firebase result res@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
            result?.user?._user?.uid,
          );
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          console.error(error);
        });
      firestore().collection('Users').doc(result?.user?._user?.uid).set({
        email: emailInput,
        uid: result?.user?._user?.uid,
        status: 'online',
      });
      await AsyncStorage.setItem("SignupUID",result?.user?._user?.uid)
      Platform.OS == 'android'
        ? ToastAndroid.show('User logged in successfully!', ToastAndroid.SHORT)
        : Alert.alert('User logged in successfully!');
      setEmailInput('');
      setPasswordInput('');
      setConfirmPasswordInput('');
      props.navigation.navigate('dashboard');
    } catch (error) {
      Alert.alert('Something went wrong!');
      console.log('error', error);
    }
  };

  const onSignupBtnClick = () => {
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
    } else if (
      passwordRegex.test(confirmPasswordInput) === false ||
      confirmPasswordInput.length === 0
    ) {
      Platform.OS == 'android'
        ? ToastAndroid.show(
            'Your confirm password must contain uppercase, lower case, number and special characters!',
            ToastAndroid.SHORT,
          )
        : Alert.alert(
            'Your confirm password must contain uppercase, lower case, number and special characters!',
          );
    } else if (passwordInput != confirmPasswordInput) {
      Platform.OS == 'android'
        ? ToastAndroid.show(
            'Password and Confirm Password does not match',
            ToastAndroid.SHORT,
          )
        : Alert.alert('Error', 'Password and Confirm Password does not match');
    } else {
      firebaseDB();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTxt}>
          Welcome to <Text style={styles.appName}>App Delight</Text>
        </Text>
        <Text style={styles.welcomeSubTxt}>Let's get started!</Text>
      </View>
      <KeyboardAvoidingView style={styles.bodyContainer}>
        <ScrollView>
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
          <CustomInput
            label="Confirm Password"
            placeholder="Enter Confirm Password"
            placeholderTextColor={COLORS.gray}
            style={{marginTop: 15}}
            keyboardType="default"
            value={confirmPasswordInput}
            onInputChangeHandler={(text: any) =>
              onConfirmPasswordInputChangeTxt(text)
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.registerBtn}>
        <CustomButton
          label="Register"
          btnTxtColor={COLORS.white}
          btnBackgroundColor={COLORS.black}
          onClick={() => onSignupBtnClick()}
        />
        <Text style={styles.accountExist}>
          Already have a account?
          <Text
            style={styles.loginBtn}
            onPress={() => {
              props.navigation.navigate('user_login');
            }}>
            {'\t'}Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
