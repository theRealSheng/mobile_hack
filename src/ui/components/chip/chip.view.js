import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { ButtonChildren } from '../buttons/button_children';
import PropTypes from 'prop-types';

import styles from './chip.styles';

const Chip = memo(({ text, onPress }) => {
  if (onPress) {
    return (
      <ButtonChildren onPress={() => onPress(text)} btnStyle={styles.chip}>
        <Text style={styles.chipText}>{text}</Text>
      </ButtonChildren>
    );
  }
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{text}</Text>
    </View>
  );
});

Chip.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export { Chip };
