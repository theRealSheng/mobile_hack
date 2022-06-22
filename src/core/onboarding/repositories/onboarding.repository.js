import { RestApiNetwork } from 'src/common/network/rest_api.network';

const OnBoardingRepository = {
  getQuestions: () => RestApiNetwork.get('onboarding'),
  answerQuestions: body => RestApiNetwork.post('onboarding/answers', body),
};

export { OnBoardingRepository };
