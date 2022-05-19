import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Person1 from '../../../../assets/svg/person_1.svg';
import { RoundedButton } from '../buttons/rounded_button/rounded_button.view';
import styles from './room_card.styles';

const RoomCard = memo(({ onPress, title }) => {
  return (
    <View style={styles.roomBlock}>
      <Person1 style={styles.cardImage} />
      <View style={[styles.card, { transform: [{ skewX: '-15deg' }] }]}>
        <View
          style={[
            styles.cardContentContainer,
            { transform: [{ skewX: '15deg' }] },
          ]}>
          {title && <Text style={styles.cardTitle}>{title}</Text>}
          <View style={styles.buttonContainer}>
            <RoundedButton onPress={onPress}>
              <Text>+</Text>
            </RoundedButton>
          </View>
        </View>
      </View>
    </View>
  );
});

export { RoomCard };
