import React, { memo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native';
import { TrapezoidModal } from '../../components/trapezoid_modal';
import { RoomCard } from '../../components/room_card';

import styles from './onboarding_screen.styles';

import mockData from './onboarding_screen.data.json';

const OnboardingScreenView = memo(() => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
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
        </RoomCard>
      ))}
    </View>
  );
});

OnboardingScreenView.propTypes = {};

export { OnboardingScreenView };
