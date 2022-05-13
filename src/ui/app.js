import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './app.styles';

import { ContextProviderManager } from 'ui/store';
import { AppNavigation } from 'ui/navigation';

const App = () => {
  return (
    <ContextProviderManager>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </ContextProviderManager>
  );
};

export default App;
