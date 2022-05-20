import React, { memo } from 'react';
import { TextInput } from 'react-native';

import styles from './input_text.styles';

const InputText = memo(
  ({ onChange, value, placeholder, keyboardType = 'default' }) => {
    return (
      <TextInput
        style={styles.input}
        onChangeText={val => onChange(val)}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    );
  },
);

export { InputText };
