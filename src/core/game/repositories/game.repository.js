import { RestApiNetwork } from 'src/common/network/rest_api.network';

const GameRepository = {
  answerGameQuestion: (roomId, { answers }) => RestApiNetwork.post(`game/room/${roomId}`, { answers }),
};

export { GameRepository };
