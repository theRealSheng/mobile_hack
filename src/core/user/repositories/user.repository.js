import { RestApiNetwork } from 'src/common/network/rest_api.network';

const UserRepository = {
  getUser: () => RestApiNetwork.get('user'),
};

export { UserRepository };
