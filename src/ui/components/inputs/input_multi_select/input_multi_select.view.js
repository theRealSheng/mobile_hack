import React, { memo, useRef } from 'react';
import MultiSelect from 'react-native-multiple-select';
import { View } from 'react-native';
import { Colors } from 'ui/styles';
import styles from './input_multi_select.styles';
import PropTypes from 'prop-types';

const InputMultiSelect = memo(({ onChange, value, placeholder, options }) => {
  const multiSelectRef = useRef(null);
  return (
    <View style={styles.multipleSelect}>
      <MultiSelect
        hideTags
        items={options}
        uniqueKey="id"
        ref={multiSelectRef}
        onSelectedItemsChange={items => onChange(items)}
        selectedItems={value}
        selectText={placeholder}
        searchInputPlaceholderText={placeholder}
        tagRemoveIconColor={Colors.error}
        tagBorderColor={Colors.primary}
        tagTextColor="black"
        selectedItemTextColor="black"
        selectedItemIconColor="black"
        hideSubmitButton={true}
      />
      <View>
        {multiSelectRef.current &&
          multiSelectRef.current.getSelectedItemsExt(value)}
      </View>
    </View>
  );
});

InputMultiSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export { InputMultiSelect };
