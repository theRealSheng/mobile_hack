import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './square_button.styles';

const SquareButton = memo(({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.squareButton} onPress={onPress}>
      {text && <Text style={styles.buttonText}>{text.toUpperCase()}</Text>}
    </TouchableOpacity>
  );
});

export { SquareButton };
