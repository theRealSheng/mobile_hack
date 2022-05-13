import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './login_screen.styles';

const LoginScreenView = memo(({ onLogin }) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
});

LoginScreenView.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export { LoginScreenView };
