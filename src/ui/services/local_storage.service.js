import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppConfig } from 'common/config/app_config';

const LocalStorageService = {
  getItem: async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.warn('LocalStorageService/getItem:', error);
      return null;
    }
  },
  setItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('LocalStorageService/setItem:', error);
      return false;
    }
  },
  clearAll: async () => {
    try {
      const asyncStorageKeys = await AsyncStorage.getAllKeys();
      if (asyncStorageKeys.length > 0) {
        if (AppConfig.isAndroid) {
          await AsyncStorage.clear();
        }
        if (AppConfig.isIos) {
          await AsyncStorage.multiRemove(asyncStorageKeys);
        }
      }
      return true;
    } catch (error) {
      console.warn('LocalStorageService/clearAll:', error);
      return false;
    }
  },
};

export { LocalStorageService };
