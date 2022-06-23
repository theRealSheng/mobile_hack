import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { screenOptions } from '../config/screen_options';

import { OnboardingScreen } from 'ui/screens/onboarding_screen';
import { GameScreen } from 'ui/screens/game_screen';
import { MainScreen } from 'ui/screens/main_screen';

import { GameContexProvider } from 'ui/store/game.context';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
  return (
    <GameContexProvider>
      <Navigator screenOptions={screenOptions}>
        <Screen name="MainScreen" component={MainScreen} />
        <Screen name="Onboarding" component={OnboardingScreen} />
        <Screen name="GameScreen" component={GameScreen} />
      </Navigator>
    </GameContexProvider>
  );
};

export { AppStack };
