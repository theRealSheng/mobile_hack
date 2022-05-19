import React, { memo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Pressable } from 'react-native';
import { TrapezoidModal } from '../../components/trapezoid_modal';
import { RoomCard } from '../../components/room_card';

import styles from './onboarding_screen.styles';

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
      <RoomCard onPress={() => setIsOpenModal(true)} title={'Create room'} />
      <Text style={styles.onboardingTitle}>Enjoy with others!</Text>
      <RoomCard onPress={() => setIsOpenModal(true)} title={'Create room'} />
      <RoomCard onPress={() => setIsOpenModal(true)} title={'Create room'} />
    </View>
  );
});

OnboardingScreenView.propTypes = {};

export { OnboardingScreenView };
