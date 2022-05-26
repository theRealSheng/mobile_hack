import React, { memo } from 'react';
import { View } from 'react-native';

import { styles } from './trapezoid.styles';
import PropTypes from 'prop-types';

const Trapezoid = memo(({ children }) => {
  return (
    <View>
      <View style={styles.offsetContainer} />
      <View
        style={[styles.rotateContainer, { transform: [{ skewY: '20deg' }] }]}
      />
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
});

Trapezoid.propTypes = {
  children: PropTypes.node,
};

export { Trapezoid };
