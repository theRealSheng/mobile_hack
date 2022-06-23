import React, { memo, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './ranking.styles';

import StartIcon from 'ui/assets/svg/start.svg';
import Plus from 'ui/assets/svg/plus.svg';

import { RoomCard } from 'ui/components/room_card';
import { ButtonText } from 'ui/components/buttons/button_text';
import { ButtonChildren } from 'ui/components/buttons/button_children';

import { useRanking } from './hook/use_ranking_hook';

const Ranking = memo(() => {
  const { oldGames, showRankingList, onSelectView } = useRanking();

  const renderOldGameCard = useCallback(
    game => {
      const { roomName, winner } = game;
      return (
        <RoomCard
          title={roomName}
          btnType={'next'}
          onPress={() => onSelectView(game)}
          children={
            <View style={styles.content}>
              <View style={styles.ranking}>
                <StartIcon />
                <Text style={styles.name}>{winner}</Text>
              </View>
              <View style={styles.btnWrapper}>
                <ButtonText
                  text={'View all'}
                  type={'textRound'}
                  textStyle={styles.btnText}
                  onPress={() => onSelectView(game)}
                />
              </View>
            </View>
          }
        />
      );
    },
    [onSelectView],
  );

  const renderOldGames = useCallback(() => {
    if (showRankingList) {
      return null;
    }
    if (!oldGames.length) {
      return <Text>No previous games played</Text>;
    }
    return oldGames.map(game => renderOldGameCard(game));
  }, [showRankingList, oldGames, renderOldGameCard]);

  const renderRankingList = useCallback(() => {
    if (!showRankingList) {
      return null;
    }

    return showRankingList.map((user, index) => {
      return (
        <View style={styles.rankingItem}>
          <View style={styles.position}>
            <Text>{index + 1}</Text>
          </View>
          <Text style={styles.user}>{user}</Text>
        </View>
      );
    });
  }, [showRankingList]);

  const onHideRankingList = useCallback(() => {
    onSelectView(null);
  }, [onSelectView]);

  return (
    <ScrollView style={styles.container}>
      {showRankingList && (
        <ButtonText text={'Return'} type={'textRound'} textStyle={styles.btnText} onPress={onHideRankingList} />
      )}
      <Text style={styles.heading}>{showRankingList ? 'The ranking!' : 'Who is the best?'}</Text>
      {renderOldGames()}
      {renderRankingList()}
      {/* <RoomCard
        title={'The best room'}
        btnType={'next'}
        children={
          <View style={styles.content}>
            <View style={styles.ranking}>
              <StartIcon />
              <Text style={styles.name}>Hamsi</Text>
            </View>
            <View style={styles.btnWrapper}>
              <ButtonText text={'View all'} type={'textRound'} textStyle={styles.btnText} />
            </View>
          </View>
        }
      /> */}
    </ScrollView>
  );
});

export { Ranking };
