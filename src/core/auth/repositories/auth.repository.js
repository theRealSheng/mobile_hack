import { RestApiNetwork } from 'src/common/network/rest_api.network';

const AuthRepository = {
  login: (email, password) => RestApiNetwork.post('auth/login', { email, password }),
  logOut: id => RestApiNetwork.post('auth/logout', { id }),
};

export { AuthRepository };
