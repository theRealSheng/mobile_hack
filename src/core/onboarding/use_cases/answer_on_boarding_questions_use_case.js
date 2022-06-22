import { OnBoardingRepository } from '../repositories/onboarding.repository';

const AnswerOnBoardingQuestionsUseCase = body => OnBoardingRepository.answerQuestions(body);

export { AnswerOnBoardingQuestionsUseCase };
