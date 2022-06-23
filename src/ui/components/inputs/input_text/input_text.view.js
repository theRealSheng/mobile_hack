import React, { memo } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './input_text.styles';

const InputText = memo(({ onChange, value, placeholder, keyboardType = 'default', inputStyle = {} }) => {
  return (
    <TextInput
      style={[styles.input, inputStyle]}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
});

InputText.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
};

export { InputText };
