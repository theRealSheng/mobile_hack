import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { DebugConfig } from './debug_config';

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
  host: () => {
    return AppConfig.servers[AppConfig.selectedServer].api;
  },
  hostPublic: () => {
    return AppConfig.servers[AppConfig.selectedServer].public;
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
