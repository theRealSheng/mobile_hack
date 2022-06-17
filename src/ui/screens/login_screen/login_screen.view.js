import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Trapezoid } from '../../components/trapezoid';
import { randomPersonPicker } from '../../../utils/randomPersonPicker';
import styles from './login_screen.styles';
import { ButtonText } from '../../components/buttons/button_text';

const LoginScreenView = memo(({}) => {
  return (
    <>
      <Trapezoid>
        <Text style={styles.loginTitle}>LOG IN</Text>
        <View style={styles.loginContentContainer}>
          <Text style={styles.loginSubtitle}>
            Sign in into your DCSL Outlook account to enter the game!
          </Text>
          {randomPersonPicker(200)}
          <ButtonText text="Sign in" onPress={() => console.warn('Sign in')} />
        </View>
      </Trapezoid>
      <View style={styles.overlay} />
    </>
  );
});

LoginScreenView.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export { LoginScreenView };
