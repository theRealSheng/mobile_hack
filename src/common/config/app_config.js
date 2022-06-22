import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { DebugConfig } from './debug_config';

import { LocalStorageService } from 'ui/services/local_storage.service';

const { width, height } = Dimensions.get('window');

const AppConfig = {
  selectedServer: __DEV__ ? DebugConfig.selectedServer : 'prod',
  servers: {
    prod: {
      api: '',
      public: '',
    },
    dev: {
      api: 'http://localhost:4010/',
      public: 'http://localhost:4010/',
    },
  },
  authHeaders: async () => {
    const token = await LocalStorageService.getItem('token');
    if (token) {
      return {
        Authorization: token,
      };
    }
    return {};
  },
  width,
  height,
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  deviceType: Platform.OS,
  osVersion: DeviceInfo.getSystemVersion(),
  modelName: DeviceInfo.getModel(),
};

export { AppConfig };
