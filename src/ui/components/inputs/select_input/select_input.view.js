import React, { memo, useState, useCallback } from 'react';
import { View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

import styles from './select_input.styles';

import SelectIcon from 'ui/assets/icons/arrow_down.svg';

const SelectInput = memo(({ options, multiple = false, onSelect }) => {
  const [selected, setSelected] = useState({});

  const onValueChange = id => {
    const newIsSelected = {};
    newIsSelected[id] = id;
    setSelected(newIsSelected);
    onSelect(id);
  };

  const renderOptions = () => {
    return (
      <View style={Platform.OS === 'ios' ? styles.inputIOS : styles.inputAndroid}>
        <RNPickerSelect
          placeholder={{ label: "Select an item from the list", value: null }}
          onValueChange={(_, id) => onValueChange(id)}
          items={options}
          style={{
            ...(styles.input),
            iconContainer: styles.iconContainer,
          }}
          Icon={() => <SelectIcon width={40} heigth={40} />}
        />
      </View>
    )
  };

  return (
    <View>
      {renderOptions()}
    </View>
  )
});

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
  ),
  multiple: PropTypes.bool,
  onSelect: PropTypes.func,
};

export { SelectInput };
