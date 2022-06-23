import { GameRepository } from '../repositories/game.repository';

const GetGameQuestionsUseCase = roomId => GameRepository.getGameQuestions(roomId);

export { GetGameQuestionsUseCase };
