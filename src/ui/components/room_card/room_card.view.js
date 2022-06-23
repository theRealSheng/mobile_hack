import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { ButtonChildren } from '../buttons/button_children/button_children.view';
import styles from './room_card.styles';
import Plus from 'ui/assets/svg/plus.svg';
import NextArrow from 'ui/assets/svg/next_arrow.svg';
import { randomPersonPicker } from 'ui/utils/randomPersonPicker';

import PropTypes from 'prop-types';

const RoomCard = memo(({ onPress, title, children, btnType }) => {
  const BTN_MAPPER = {
    plus: <Plus />,
    next: <NextArrow />,
  };

  return (
    <View style={styles.roomBlock}>
      <View style={styles.avatar}>{randomPersonPicker()}</View>
      <View style={styles.card}>
        <View style={styles.cardContentContainer}>
          {title && <Text style={styles.cardTitle}>{title}</Text>}
          {children}
        </View>
        {btnType && (
          <View style={styles.buttonContainer}>
            <ButtonChildren onPress={onPress} type="rounded">
              {BTN_MAPPER[btnType]}
            </ButtonChildren>
          </View>
        )}
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
