import React, { memo } from 'react';
import { View, Text } from 'react-native';

import styles from './login_screen.styles';

import { Trapezoid } from 'ui/components/trapezoid';
import { ButtonText } from 'ui/components/buttons/button_text';
import { InputText } from 'ui/components/inputs/input_text';

import { randomPersonPicker } from 'ui/utils/randomPersonPicker';

import { useAuthContext } from 'ui/store/auth.context';

const LoginScreenView = memo(() => {
  const { email, password, onLogin, setEmail, setPassword, errorMessage } = useAuthContext();
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{randomPersonPicker(400)}</View>
      <Trapezoid>
        <Text style={styles.loginTitle}>LOG IN</Text>
        <View style={styles.loginContentContainer}>
          <Text style={styles.loginSubtitle} numberOfLines={2}>Sign in into your Victoria account to enter the game!</Text>

          <View style={styles.input}>
            <InputText value={email} onChange={setEmail} placeholder={'Enter your email'} />
          </View>
          <View style={styles.input}>
            <InputText value={password} onChange={setPassword} placeholder={'Enter your password'} />
          </View>

          {errorMessage && <Text style={styles.errorMessage}>errorMessage</Text>}

          <ButtonText text="Sign in" onPress={onLogin} />
        </View>
      </Trapezoid>
    </View>
  );
});

export { LoginScreenView };
