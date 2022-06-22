import { OnBoardingRepository } from '../repositories/onboarding.repository';

const GetOnBoardingQuestionsUseCase = () => OnBoardingRepository.getQuestions();

export { GetOnBoardingQuestionsUseCase };
