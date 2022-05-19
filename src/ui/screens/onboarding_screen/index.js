import { wrapContextComponent, wrapState } from 'ui/hoc/joint_context';
import { AuthContext } from 'ui/store/auth_context';
import { OnboardingScreenView } from './onboarding_screen.view';

const mapProps = ({ authContext }) => {
  const { onLogin } = authContext;
  return {
    onLogin: (email, password) => {
      onLogin({ email, password });
    },
  };
};

const OnboardingScreen = wrapState(OnboardingScreenView, mapProps, [
  wrapContextComponent('authContext', AuthContext),
]);

export { OnboardingScreen };
