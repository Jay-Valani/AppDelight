import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLogin from '../screens/auth-screen/user-login/UserLogin';
import UserSignup from '../screens/auth-screen/user-signup/UserSignup';
import AuthScreen from '../screens/auth-screen/auth-screen/AuthScreen';
import DashboardScreen from '../screens/dashboard-screen/DashboardScreen';
import FavoriteScreen from '../screens/favorite-screen/FavoriteScreen';

export type StackScreens = {
    user_login: undefined;
    user_signup: undefined
    user_auth: undefined
    dashboard: undefined
    favorite: undefined
};

const StackScreen = createNativeStackNavigator();


export function RootStack() {
  return (
    <StackScreen.Navigator initialRouteName="user_auth">
      <StackScreen.Screen
        name="user_auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="user_login"
        component={UserLogin}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="user_signup"
        component={UserSignup}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <StackScreen.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{headerShown: false}}
      />
    </StackScreen.Navigator>
  )
}