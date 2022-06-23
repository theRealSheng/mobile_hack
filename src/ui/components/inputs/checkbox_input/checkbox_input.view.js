import React, { memo, useState, useCallback } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import CheckBox from '@react-native-community/checkbox';

import styles from './checkbox_input.styles';

const CheckboxInput = memo(({ options, multiple = false, onSelect }) => {
  const [selected, setSelected] = useState({});

  const onValueChange = (id, isSelected) => {
    const newIsSelected = !multiple ? {} : { ...selected };
    newIsSelected[id] = isSelected;
    setSelected(newIsSelected);
    onSelect(id);
  };

  const renderOptions = () => {
    return options.map(item => {
      const { id, label } = item;
      return (
        <View style={styles.option} key={id}>
          <CheckBox value={selected[id] || false} onValueChange={isSelected => onValueChange(id, isSelected)} />
          <Text style={styles.label}>{label}</Text>
        </View>
      );
    });
  };

  return <View>{renderOptions()}</View>;
});

CheckboxInput.propTypes = {
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

export { CheckboxInput };
