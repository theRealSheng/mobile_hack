import { RestApiNetwork } from 'src/common/network/rest_api.network';

const GameRepository = {
  answerGameQuestion: (roomId, { answers }) => RestApiNetwork.post(`game/room/${roomId}`, { answers }),
  fetchOldGames: () => RestApiNetwork.get('game/old'),
  fetchCurrentGames: () => RestApiNetwork.get('game/old'),
  getGameQuestions: roomId => RestApiNetwork.get(`game/romm/${roomId}`),
  respondGameQuestion: (roomId, { answers }) => RestApiNetwork.post(`game/room/${roomId}`, { answers }),
};

export { GameRepository };
