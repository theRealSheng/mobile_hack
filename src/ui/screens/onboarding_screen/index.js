import React from 'react';

import { OnBoardingContexProvider } from 'ui/store/on_boarding.context';

import { OnboardingScreenView } from './onboarding_screen.view';

const OnboardingScreen = () => (
  <OnBoardingContexProvider>
    <OnboardingScreenView />
  </OnBoardingContexProvider>
);

export { OnboardingScreen };
