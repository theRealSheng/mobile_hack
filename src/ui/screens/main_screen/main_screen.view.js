import React, { memo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './main_screen.styles';

import { GameList } from './components/game_list';
import { Ranking } from './components/ranking/ranking.view';

import TropheIcon from 'ui/assets/svg/trophe.svg';
import TropheSelectedIcon from 'ui/assets/svg/trophe_selected.svg';
import HomeSelectedIcon from 'ui/assets/svg/home_selected.svg';
import HomeIcon from 'ui/assets/svg/home.svg';
import BackgroungDrop from 'ui/assets/svg/background_drop.svg';

const MainScreenView = memo(() => {
  const [index, setIndex] = useState(0);

  const onToggleView = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <View style={styles.container}>
      {index === 0 ? <GameList /> : <Ranking />}

      <View style={styles.nav}>
        <TouchableOpacity style={styles.tab} onPress={() => onToggleView(0)}>
          {index === 0 && (
            <View style={styles.backgroundImage}>
              <BackgroungDrop />
            </View>
          )}
          {index === 0 ? <HomeSelectedIcon /> : <HomeIcon />}
          <Text style={index === 0 ? styles.selected : styles.unselected}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onToggleView(1)}>
          {index === 1 && (
            <View style={styles.backgroundImage}>
              <BackgroungDrop />
            </View>
          )}
          {index === 1 ? <TropheSelectedIcon /> : <TropheIcon />}
          <Text style={index === 1 ? styles.selected : styles.unselected}>Ranking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export { MainScreenView };
