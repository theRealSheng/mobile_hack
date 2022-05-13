import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { screenOptions } from './config/screen_options';

const { Navigator, Screen } = createNativeStackNavigator();

import { AuthStack } from 'ui/navigation/stacks/auth.stack';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name="Auth" component={AuthStack} />
      </Navigator>
    </NavigationContainer>
  );
};

export { AppNavigation };
