import axios from 'axios';
import { AppConfig } from 'common/config/app_config';

const api = axios.create({
  baseURL: AppConfig.host(),
  timeout: 60000,
});

const RestApiNetwork = {
  _getHeaders: () => {
    let headers = AppConfig.defaultHeaders;
    headers = { ...headers, ...AppConfig.authHeaders() };
    return headers;
  },
  get: (url, params = {}) => api.get(url, params),
  post: (url, body) => api.post(url, body),
  put: (url, body) => api.put(url, body),
  patch: (url, body) => api.patch(url, body),
};

export { RestApiNetwork };
