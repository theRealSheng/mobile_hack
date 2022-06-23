import React, { useState, useEffect, useCallback } from 'react';
import { useRoute } from '@react-navigation/native';

import { STATUS_CODES } from 'common/constants';

import { GetGameQuestionsUseCase } from 'core/game/use_cases';

const useGame = () => {
  const route = useRoute();
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionsIndex] = useState(0);
  const { roomId } = route.params;

  useEffect(() => {
    //@TODO - Need to check if room is ready
    const fetchGameQuestions = async () => {
      try {
        const gameQuestionsRes = await GetGameQuestionsUseCase(roomId);
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
  }, [roomId]);

  const onClickNextQuestion = useCallback(() => {
    setQuestionsIndex(questionIndex + 1);
    //@TODO  - Add logic to submit from Game Context w/ RespondGameQuestionUseCase
  }, [questionIndex]);

  const onClickPreviousQuestion = useCallback(() => {
    setQuestionsIndex(questionIndex - 1);
  }, [questionIndex]);

  return {
    game: questions[questionIndex],
    questionIndex,
    onClickNextQuestion,
    onClickPreviousQuestion,
  };
};

export { useGame };
