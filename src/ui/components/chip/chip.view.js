import React, { memo } from 'react';
import { Text, View } from 'react-native';

import styles from './chip.styles';

const Chip = memo(({ text }) => {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{text}</Text>
    </View>
  );
});

export { Chip };
