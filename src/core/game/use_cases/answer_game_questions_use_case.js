import { GameRepository } from '../repositories/game.repository';

const AnswerGameQuestionUseCase = (roomId, { answers }) => GameRepository.answerGameQuestion(roomId, { answers });

export { AnswerGameQuestionUseCase };
