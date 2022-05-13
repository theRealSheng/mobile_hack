import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { screenOptions } from '../config/screen_options';

import { LoginScreen } from 'ui/screens/login_screen';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
};

export { AuthStack };
