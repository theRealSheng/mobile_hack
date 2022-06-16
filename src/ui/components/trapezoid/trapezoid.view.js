import React, { memo } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './trapezoid.styles';

const Trapezoid = memo(
  ({ children, iconZIndex, PersonIcon, iconWidth, iconHeight }) => {
    return (
      <View style={styles.container}>
        <View style={styles.offsetContainer}>
          {PersonIcon &&
            <PersonIcon height={iconHeight} width={iconWidth}
            style={{
              ...(styles.personIcon),
              zIndex: iconZIndex,
            }} />}
          <View style={styles.rotateContainer} />
        </View>
        <View style={styles.contentContainer}>
          {children}
        </View>
      </View>
    );
  },
);

Trapezoid.propTypes = {
  children: PropTypes.node,
  iconZIndex: PropTypes.number,
  PersonIcon: PropTypes.func,
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
};

export { Trapezoid };
