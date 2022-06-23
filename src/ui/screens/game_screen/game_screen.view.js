import React, { memo, useState, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Trapezoid } from '../../components/trapezoid';
import { CheckboxInput } from '../../components/inputs/checkbox_input';
import { SelectInput } from '../../components/inputs/select_input';
import { InputText } from '../../components/inputs/text_input';
import { NextButton } from '../../components/buttons/next_button';

import styles from './game_screen.styles';

import { OnBoardingData } from './game_question.data';

import { useGame } from './hook/use_game_hook';

const initialState = {
  0: null,
};

const InputTypesDic = {
  checkbox: CheckboxInput,
  select: SelectInput,
  text: InputText,
};

const GameScreenView = memo(({}) => {
  const { game, questionIndex, onClickNextQuestion, onClickPreviousQuestion } = useGame();

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.textView}>
          <View style={styles.roundedBorder}>
            <Text>{questionIndex + 1}</Text>
          </View>
          <View style={styles.innerTextView}>
            <Text>of {OnBoardingData.length}</Text>
          </View>
        </View>
      </View>
      <Trapezoid>
        {/* <Text style={styles.questionText}>{questionToAsk}</Text> */}
        <ScrollView style={styles.optionsWrapper}>

        </ScrollView>
        <View style={styles.buttonContainer}>
          {questionIndex !== 0 && (
            <NextButton text="Previous" onPress={onClickPreviousQuestion} style={styles.buttonPrevious} />
          )}
          <NextButton text="Next" onPress={onClickNextQuestion} style={styles.buttonNext} />
        </View>
      </Trapezoid>
    </View>
  );
});

GameScreenView.propTypes = {};

export { GameScreenView };
