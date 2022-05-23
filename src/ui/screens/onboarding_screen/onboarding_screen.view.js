import React, { memo, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TrapezoidModal } from '../../components/trapezoid_modal';
import { RoomCard } from '../../components/room_card';
import { Chip } from '../../components/chip';
import { InputText } from '../../components/inputs/input_text';
import { InputMultiSelect } from '../../components/inputs/input_multi_select';
import { SquareButton } from '../../components/buttons/square_button';
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
    <LinearGradient
      colors={[
        Colors.primaryLight,
        Colors.secondaryLight,
        Colors.secondaryLight,
        Colors.white,
        Colors.primaryLight,
      ]}
      start={{ x: 1.2, y: 0.7 }}
      end={{ x: 0.7, y: 0 }}
      style={styles.linearGradient}>
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
              onChange={value =>
                setNewRoomData({ ...newRoomData, name: value })
              }
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
                  text={chip}
                  onPress={value =>
                    setNewRoomData({ ...newRoomData, time: value })
                  }
                />
              ))}
            </View>
          </View>
          <View style={styles.submitButtonContainer}>
            <SquareButton
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
              btnType="next">
              <Text style={styles.roomOwner}>{item.owner}</Text>
              <Chip text={item.time} />
            </RoomCard>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </LinearGradient>
  );
});

OnboardingScreenView.propTypes = {};

export { OnboardingScreenView };
