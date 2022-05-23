import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './rounded_button.styles';

const RoundedButton = memo(({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
});

RoundedButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { RoundedButton };
