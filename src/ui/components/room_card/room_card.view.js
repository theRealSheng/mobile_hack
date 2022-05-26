import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Person1 from '../../../../assets/svg/person_1.svg';
import Person2 from '../../../../assets/svg/person_2.svg';
import Person3 from '../../../../assets/svg/person_3.svg';
import Person4 from '../../../../assets/svg/person_4.svg';

import { ButtonChildren } from '../buttons/button_children/button_children.view';
import styles from './room_card.styles';
import Plus from '../../../../assets/svg/plus.svg';
import NextArrow from '../../../../assets/svg/next_arrow.svg';

import PropTypes from 'prop-types';

const RoomCard = memo(({ onPress, title, children, btnType }) => {
  const BTN_MAPPER = {
    plus: <Plus />,
    next: <NextArrow />,
  };

  const PEOPLE_MAPPER = [
    <Person1 width={100} />,
    <Person2 width={100} />,
    <Person3 width={100} />,
    <Person4 width={100} />,
  ];

  const selectRandomPerson = () =>
    PEOPLE_MAPPER[Math.floor(Math.random() * PEOPLE_MAPPER.length)];

  return (
    <View style={styles.roomBlock}>
      {selectRandomPerson()}
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
