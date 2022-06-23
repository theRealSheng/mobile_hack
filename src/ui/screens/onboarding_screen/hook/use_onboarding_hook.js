import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { STATUS_CODES } from 'common/constants';

import { GetOnBoardingQuestionsUseCase, AnswerOnBoardingQuestionsUseCase } from 'core/game/use_cases';

const useOnboarding = () => {
  const navigation = useNavigation();

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionsIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchGameQuestions = async () => {
      try {
        const gameQuestionsRes = await GetOnBoardingQuestionsUseCase();
        if (gameQuestionsRes.status === STATUS_CODES.STATUS_OK) {
          const { data } = gameQuestionsRes.data;
          //@TODO - check data is coming correctly
          setQuestions(data);
          setQuestionsIndex(0);
        }
      } catch (e) {
        console.log('e', e);
      }
    };
    fetchGameQuestions();
  }, []);

  const submitOnBoardingAnswers = useCallback(async () => {
    try {
      //@TODO - Check how to send data correctly
      const submitOnboardingRes = await AnswerOnBoardingQuestionsUseCase({ body: answers });
      if (submitOnboardingRes.status === STATUS_CODES.STATUS_OK) {
        navigation.navigate('MainScreen');
      }
    } catch (e) {
      console.log('e', e);
      //@TODO - handle error
    }
  }, [answers, navigation]);

  const onResponseQuestion = useCallback(
    res => {
      //@TODO - Check how to save data correctly
      setAnswers({ ...answers, [questionIndex]: res });
      if (setQuestions.length - 1 !== questionIndex) {
        setQuestionsIndex(questionIndex + 1);
        return;
      }
      //@TODO - Lastr questions.. call submit
      submitOnBoardingAnswers();
    },
    [answers, questionIndex, submitOnBoardingAnswers],
  );

  const onClickNextQuestion = useCallback(() => {
    setQuestions(questionIndex + 1);
  }, [questionIndex]);

  const onClickPreviousQuestion = useCallback(() => {
    setQuestions(questionIndex - 1);
  }, [questionIndex]);

  return {
    game: questions[questionIndex],
    questionIndex,
    onResponseQuestion,
    onClickNextQuestion,
    onClickPreviousQuestion,
  };
};

export { useOnboarding };
