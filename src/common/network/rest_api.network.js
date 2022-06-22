import axios from 'axios';
import { AppConfig } from 'common/config/app_config';

const api = axios.create({
  baseURL: AppConfig.host(),
  timeout: 60000,
});

const RestApiNetwork = {
  _getHeaders: async () => {
    const headers = AppConfig.defaultHeaders;
    const authHeader = await AppConfig.authHeaders();
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
