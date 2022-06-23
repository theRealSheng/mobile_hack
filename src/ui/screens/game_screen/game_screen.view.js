import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';

import { Trapezoid } from '../../components/trapezoid';
import { CheckboxInput } from '../../components/inputs/checkbox_input';
import { SelectInput } from '../../components/inputs/select_input';
import { InputText } from '../../components/inputs/text_input';
import { NextButton } from '../../components/buttons/next_button';

import styles from './game_screen.styles';

import { OnBoardingData } from './game_question.data';

const initialState = {
  0: null,
};

const InputTypesDic = {
  checkbox: CheckboxInput,
  select: SelectInput,
  text: InputText,
};

const GameScreenView = memo(({}) => {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState(initialState);

  const {
    question: questionToAsk,
    multiple,
    type,
    options,
    icon_zIndex: iconZIndex,
    icon,
    iconHeight,
    iconWidth,
  } = OnBoardingData[question];

  const onResponseQuestion = useCallback(
    res => {
      setAnswers({ ...answers, [question]: res });
    },
    [question],
  );

  const onClickNextQuestion = useCallback(() => {
    setQuestion(question + 1);
  }, [question]);

  const onClickPreviousQuestion = useCallback(() => {
    setQuestion(question - 1);
  }, [question]);

  const ComponentInput = InputTypesDic[type];

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View>
          <Text style={styles.topText}>
            Few questions before{'\n'}
            we start...
          </Text>
        </View>
        <View style={styles.textView}>
          <View style={styles.roundedBorder}>
            <Text>{question + 1}</Text>
          </View>
          <View style={styles.innerTextView}>
            <Text>of {OnBoardingData.length}</Text>
          </View>
        </View>
      </View>
      <Trapezoid PersonIcon={icon} iconZIndex={iconZIndex} iconHeight={iconHeight} iconWidth={iconWidth}>
        <Text style={styles.questionText}>{questionToAsk}</Text>
        <ScrollView style={styles.optionsWrapper}>
          {ComponentInput && (
            <ComponentInput
              multiple={multiple}
              {...(!options?.length ? {} : { options })}
              onSelect={onResponseQuestion}
            />
          )}
        </ScrollView>
        <View style={styles.buttonContainer}>
          {question !== 0 && (
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
