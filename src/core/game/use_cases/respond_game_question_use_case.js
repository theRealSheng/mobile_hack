import { GameRepository } from '../repositories/game.repository';

const RespondGameQuestionUseCase = (roomId, { answers }) => GameRepository.respondGameQuestion(roomId, { answers });

export { RespondGameQuestionUseCase };
