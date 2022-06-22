import { GameRepository } from '../repositories/user.repository';

const AnswerGameQuestionUseCase = (roomId, { answers }) => GameRepository.getUser(roomId, { answers });

export { AnswerGameQuestionUseCase };
