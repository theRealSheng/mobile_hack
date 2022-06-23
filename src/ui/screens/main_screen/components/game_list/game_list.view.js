import React, { memo, useState, useCallback } from 'react';
import { View, Text, FlatList, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './game_list.styles';

import { Trapezoid } from 'ui/components/trapezoid';
import { RoomCard } from 'ui/components/room_card';
import { Chip } from 'ui/components/chip';
import { InputText } from 'ui/components/inputs/input_text';
import { InputMultiSelect } from 'ui/components/inputs/input_multi_select';
import { ButtonText } from 'ui/components/buttons/button_text';
import { ButtonChildren } from 'ui/components/buttons/button_children';

import BackArrow from 'ui/assets/svg/back_arrow.svg';

import { useGameList } from './hook/use_game_list_hook';

import { joinersMockData, roomsMockData, timeChips } from './game_list.data';

const GameList = memo(() => {
  const navigation = useNavigation();

  const { currentGames } = useGameList();
  const [newRoomData, setNewRoomData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onToggleModal = () => setIsOpenModal(!isOpenModal);

  const renderCurrentGames = useCallback(() => {
    // if (!currentGames.length) {
    //   return <Text>No current games available. Create one!</Text>;
    // }
    //@TODO - Hook currentGames to below flatlist

    return (
      <FlatList
        data={roomsMockData}
        renderItem={({ item }) => (
          <RoomCard
            onPress={() => navigation.navigate('GameScreen', { params: { roomId: item.id } })}
            title={item.name}
            key={item.id}
            btnType="next">
            <Text style={styles.roomOwner}>{item.owner}</Text>
            <Chip text={item.time} />
          </RoomCard>
        )}
        keyExtractor={item => item.id}
      />
    );
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.onboardingTitle}>Be the master!</Text>

      <RoomCard onPress={onToggleModal} title={'Create room'} btnType="plus" />

      <Text style={styles.onboardingTitle}>Enjoy with others!</Text>

      {renderCurrentGames()}

      {isOpenModal && (
        <Modal onRequestClose={onToggleModal} animationType="slide" transparent={true}>
          <Trapezoid>
            <ButtonChildren btnStyle={styles.backArrowButton} onPress={onToggleModal}>
              <BackArrow fill="black" width={20} height={20} />
            </ButtonChildren>
            <Text style={styles.modalTitle}>Create room</Text>
            <View>
              <InputText
                onChange={value => setNewRoomData({ ...newRoomData, roomName: value })}
                value={newRoomData.roomName}
                placeholder="Choose a name for the room"
                inputStyle={styles.input}
              />
              <InputText
                onChange={value => setNewRoomData({ ...newRoomData, name: value })}
                value={newRoomData.name}
                placeholder="Enter your name"
                inputStyle={styles.input}
              />
              <InputMultiSelect
                onChange={value => {
                  setNewRoomData({ ...newRoomData, joiners: value });
                }}
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
                    onPress={value => setNewRoomData({ ...newRoomData, time: value })}
                  />
                ))}
              </View>
            </View>
            <View style={styles.submitButtonContainer}>
              <ButtonText text="Create" onPress={() => console.warn('newRoomData', newRoomData)} />
            </View>
          </Trapezoid>
        </Modal>
      )}
    </View>
  );
});

export { GameList };
