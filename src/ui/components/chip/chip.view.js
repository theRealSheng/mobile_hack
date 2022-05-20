import React, { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './chip.styles';

const Chip = memo(({ text, onPress }) => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={() => onPress(text)} style={styles.chip}>
        <Text style={styles.chipText}>{text}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.chip}>
        <Text style={styles.chipText}>{text}</Text>
      </View>
    );
  }
});

export { Chip };
