import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TrapezoidModal } from '../../components/trapezoid_modal';
import { RoomCard } from '../../components/room_card';
import { Chip } from '../../components/chip';

import LinearGradient from 'react-native-linear-gradient';
import { Colors, Size } from 'ui/styles';

import styles from './onboarding_screen.styles';

import mockData from './onboarding_screen.data.json';

const OnboardingScreenView = memo(() => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <LinearGradient
      colors={['#ECFEDC', '#E5EFFA', '#E5EFFA', Colors.white, '#ECFEDC']}
      start={{ x: 1.2, y: 0.7 }}
      end={{ x: 0.7, y: 0 }}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <TrapezoidModal
          isOpen={isOpenModal}
          title={'Create room'}
          hasBackBtn={true}
          onClose={() => setIsOpenModal(false)}>
          <Text style={styles.modalText}>Hello World!</Text>
        </TrapezoidModal>
        <Text style={styles.onboardingTitle}>Be the master!</Text>
        <RoomCard
          onPress={() => setIsOpenModal(true)}
          title={'Create room'}
          btnType="plus"
        />
        <Text style={styles.onboardingTitle}>Enjoy with others!</Text>
        {mockData.map(({ name, owner, time, id }) => (
          <RoomCard
            onPress={() => console.warn('id', id)}
            title={name}
            btnType="next">
            <Text style={styles.roomOwner}>{owner}</Text>
            <Chip text={time} />
          </RoomCard>
        ))}
      </View>
    </LinearGradient>
  );
});

OnboardingScreenView.propTypes = {};

export { OnboardingScreenView };
