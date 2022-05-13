import { wrapContextComponent, wrapState } from 'ui/hoc/joint_context';
import { AuthContext } from 'ui/store/auth_context';
import { LoginScreenView } from './login_screen.view';

const mapProps = ({ authContext }) => {
  const { onLogin } = authContext;
  return {
    onLogin: (email, password) => {
      onLogin({ email, password });
    },
  };
};

const LoginScreen = wrapState(LoginScreenView, mapProps, [
  wrapContextComponent('authContext', AuthContext),
]);

export { LoginScreen };
