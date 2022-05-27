import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { ButtonChildren } from '../buttons/button_children/button_children.view';
import styles from './room_card.styles';
import Plus from '../../../../assets/svg/plus.svg';
import NextArrow from '../../../../assets/svg/next_arrow.svg';
import { randomPersonPicker } from '../../../utils/randomPersonPicker';

import PropTypes from 'prop-types';

const RoomCard = memo(({ onPress, title, children, btnType }) => {
  const BTN_MAPPER = {
    plus: <Plus />,
    next: <NextArrow />,
  };

  return (
    <View style={styles.roomBlock}>
      {randomPersonPicker()}
      <View style={[styles.card, { transform: [{ skewX: '-15deg' }] }]}>
        <View
          style={[
            styles.cardContentContainer,
            { transform: [{ skewX: '15deg' }] },
          ]}>
          {title && <Text style={styles.cardTitle}>{title}</Text>}
          {children}
          {btnType && (
            <View style={styles.buttonContainer}>
              <ButtonChildren onPress={onPress} type="rounded">
                {BTN_MAPPER[btnType]}
              </ButtonChildren>
            </View>
          )}
        </View>
      </View>
    </View>
  );
});

RoomCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  btnType: PropTypes.string,
};

export { RoomCard };
