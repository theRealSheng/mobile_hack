import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './square_button.styles';

const SquareButton = memo(({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.squareButton} onPress={onPress}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
});

SquareButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export { SquareButton };
