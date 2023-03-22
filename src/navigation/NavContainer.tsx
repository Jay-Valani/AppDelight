import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './RootStack';

export const NavContainer = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};