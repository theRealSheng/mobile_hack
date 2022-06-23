import { RestApiNetwork } from 'src/common/network/rest_api.network';

const GameRepository = {
  answerGameQuestion: (roomId, { answers }) => RestApiNetwork.post(`game/room/${roomId}`, { answers }),
  fetchOldGames: () => RestApiNetwork.get('game/old'),
};

export { GameRepository };
