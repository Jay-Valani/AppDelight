import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLogin from '../screens/auth-screen/user-login/UserLogin';
import UserSignup from '../screens/auth-screen/user-signup/UserSignup';


export type LoginStackScreens = {
    user_login: undefined;
    user_signup: undefined
};

const LoginStack = createNativeStackNavigator<LoginStackScreens>();

export type HomeStackScreens = {
  dashboard: undefined;
  demo: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackScreens>();

export function RootStack() {
  const [isLogged, setIsLogged] = useState(false);
  return !isLogged ? (
    <LoginStack.Navigator initialRouteName="user_login">
      <LoginStack.Screen
        name="user_login"
        component={UserLogin}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="user_signup"
        component={UserSignup}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  ) : (
    <HomeStack.Navigator initialRouteName="dashboard">
      {/* <HomeStack.Screen
        name="dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="demo"
        component={Demo}
        options={{headerShown: false}}
      /> */}
    </HomeStack.Navigator>
  );
}