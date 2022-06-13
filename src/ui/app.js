import React from 'react';
import { SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'ui/styles';
import styles from './app.styles';

import { ContextProviderManager } from 'ui/store';
import { AppNavigation } from 'ui/navigation';

const App = () => {
  return (
    <ContextProviderManager>
      <LinearGradient
        colors={[
          Colors.primaryLight,
          Colors.secondaryLight,
          Colors.primaryLight,
          Colors.primaryLight,
          Colors.primaryLight,
        ]}
        start={{ x: 1.2, y: 0.7 }}
        end={{ x: 0.7, y: 0 }}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
        </SafeAreaView>
      </LinearGradient>
    </ContextProviderManager>
  );
};

export default App;
