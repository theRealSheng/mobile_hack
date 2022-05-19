import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './rounded_button.styles';

const RoundedButton = memo(({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
});

export { RoundedButton };
