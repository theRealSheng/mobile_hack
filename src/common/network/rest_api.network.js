import axios from 'axios';
import { AppConfig } from 'common/config/app_config';

import { LocalStorageService } from 'ui/services/local_storage.service';

const api = axios.create({
  baseURL: AppConfig.host(),
  timeout: 60000,
});

const RestApiNetwork = {
  _getHeaders: async () => {
    const headers = AppConfig.defaultHeaders;
    const token = await LocalStorageService.getItem('token');
    const authHeader = {
      ...(!token ? {} : { Authorization: token }),
    };
    return { ...headers, ...authHeader };
  },
  get: async (url, params = {}) => {
    const headers = await RestApiNetwork._getHeaders();
    return api.get(url, {
      ...params,
      headers,
    });
  },
  post: async (url, body) => {
    const headers = await RestApiNetwork._getHeaders();
    return api.post(url, {
      body,
      headers,
    });
  },
  put: async (url, body) => {
    const headers = await RestApiNetwork._getHeaders();
    return api.put(url, body, headers);
  },
};

export { RestApiNetwork };
