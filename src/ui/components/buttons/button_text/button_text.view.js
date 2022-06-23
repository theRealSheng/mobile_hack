import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ButtonChildren } from '../button_children';
import styles from './button_text.style';
import { Text } from 'react-native';

const ButtonText = memo(({ onPress, text, type = 'square', textStyle = null }) => {
  return (
    <ButtonChildren type={type} onPress={onPress}>
      <Text style={textStyle || styles.buttonText}>{text.toUpperCase()}</Text>
    </ButtonChildren>
  );
});

ButtonText.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export { ButtonText };
