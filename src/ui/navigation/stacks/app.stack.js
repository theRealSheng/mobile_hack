import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { screenOptions } from '../config/screen_options';

import { OnboardingScreen } from 'ui/screens/onboarding_screen';
import { GameScreen } from 'ui/screens/game_screen';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Onboarding" component={OnboardingScreen} />
      <Screen name="GameScreen" component={GameScreen} />
    </Navigator>
  );
};

export { AppStack };
