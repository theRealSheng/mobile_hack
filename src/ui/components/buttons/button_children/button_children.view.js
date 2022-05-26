import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './button_children.styles';

const BUTTON_STYLES = {
  rounded: styles.roundedButton,
  square: styles.squareButton,
};

const ButtonChildren = memo(({ onPress, children, type, btnStyle }) => {
  return (
    <TouchableOpacity
      style={BUTTON_STYLES[type] || btnStyle || {}}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
});

ButtonChildren.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  btnStyles: PropTypes.object,
};

export { ButtonChildren };
