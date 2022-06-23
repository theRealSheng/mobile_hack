import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';

import { Trapezoid } from 'ui/components/trapezoid';
import { CheckboxInput } from 'ui/components/inputs/checkbox_input';
import { SelectInput } from 'ui/components/inputs/select_input';
import { InputText } from 'ui/components/inputs/text_input';
import { NextButton } from 'ui/components/buttons/next_button';

import styles from './onboarding_screen.styles';

import { OnBoardingData } from './game_question.data';

import { useOnboarding } from './hook/use_onboarding_hook';

const InputTypesDic = {
  checkbox: CheckboxInput,
  select: SelectInput,
  text: InputText,
};

const OnboardingScreenView = memo(() => {
  const { game, questionIndex, onResponseQuestion, onClickNextQuestion, onClickPreviousQuestion } = useOnboarding();

  // if (!game) {
  //   return <Text>Loading</Text>;
  // }

  const {
    question: questionToAsk,
    multiple,
    type,
    options,
    icon_zIndex: iconZIndex,
    icon,
    iconHeight,
    iconWidth,
  } = OnBoardingData[questionIndex]; /// Remplace for game from useGame();

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
            <Text>{questionIndex + 1}</Text>
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
          {questionIndex !== 0 && (
            <NextButton text="Previous" onPress={onClickPreviousQuestion} style={styles.buttonPrevious} />
          )}
          <NextButton text="Next" onPress={onClickNextQuestion} style={styles.buttonNext} />
        </View>
      </Trapezoid>
    </View>
  );
});

export { OnboardingScreenView };
