import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './next_button.styles';

const NextButton = memo(({ onPress, text, style }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
});

NextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export { NextButton };
