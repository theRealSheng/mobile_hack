import React from 'react';
import { View, Text } from 'react-native';

import styles from './ranking.styles';

import StartIcon  from 'ui/assets/svg/start.svg';

import { RoomCard } from 'ui/components/room_card';

const Ranking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Who is the best?</Text>

      <RoomCard 
        title="The best room"
        children={(
          <View>
            <StartIcon />
            <Text style={styles.text}>
              Hamsi
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export { Ranking };
