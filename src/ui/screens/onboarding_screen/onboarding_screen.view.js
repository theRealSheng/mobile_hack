import React, { memo, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TrapezoidModal } from '../../components/trapezoid_modal';
import { RoomCard } from '../../components/room_card';
import { Chip } from '../../components/chip';
import { InputText } from '../../components/inputs/input_text';
import { InputMultiSelect } from '../../components/inputs/input_multi_select';
import { ButtonText } from '../../components/buttons/button_text';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'ui/styles';

import styles from './onboarding_screen.styles';

import {
  joinersMockData,
  roomsMockData,
  timeChips,
} from './onboarding_screen.data';

const OnboardingScreenView = memo(() => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newRoomData, setNewRoomData] = useState({});

  return (
    <View style={styles.container}>
      <TrapezoidModal
        isOpen={isOpenModal}
        title={'Create room'}
        hasBackBtn={true}
        onClose={() => setIsOpenModal(false)}>
        <View style={styles.createRoomInputsContainer}>
          <InputText
            onChange={value =>
              setNewRoomData({ ...newRoomData, roomName: value })
            }
            value={newRoomData.roomName}
            placeholder="Choose a name for the room"
          />
          <InputText
            onChange={value => setNewRoomData({ ...newRoomData, name: value })}
            value={newRoomData.name}
            placeholder="Enter your name"
          />
          <InputMultiSelect
            onChange={value =>
              setNewRoomData({ ...newRoomData, joiners: value })
            }
            value={newRoomData.joiners}
            placeholder="Select a joiner"
            options={joinersMockData}
          />
          <Text style={styles.selectTimeText}>Set a time for the room</Text>
          <View style={styles.timeChipsContainer}>
            {timeChips.map(chip => (
              <Chip
                key={chip.id}
                text={chip.value}
                onPress={value =>
                  setNewRoomData({ ...newRoomData, time: value })
                }
              />
            ))}
          </View>
        </View>
        <View style={styles.submitButtonContainer}>
          <ButtonText
            text="Create"
            onPress={() => console.warn('newRoomData', newRoomData)}
          />
        </View>
      </TrapezoidModal>
      <Text style={styles.onboardingTitle}>Be the master!</Text>
      <RoomCard
        onPress={() => setIsOpenModal(true)}
        title={'Create room'}
        btnType="plus"
      />
      <Text style={styles.onboardingTitle}>Enjoy with others!</Text>
      <FlatList
        data={roomsMockData}
        renderItem={({ item }) => (
          <RoomCard
            onPress={() => console.warn('id', item.id)}
            title={item.name}
            key={item.id}
            btnType="next">
            <Text style={styles.roomOwner}>{item.owner}</Text>
            <Chip text={item.time} />
          </RoomCard>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
});

OnboardingScreenView.propTypes = {};

export { OnboardingScreenView };
