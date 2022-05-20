import React, { memo, useState, useRef, useEffect } from 'react';
import MultiSelect from 'react-native-multiple-select';
import { View } from 'react-native';
import { Colors } from 'ui/styles';
import styles from './input_select.styles';

const InputSelect = memo(({ onChange, value, placeholder, options }) => {
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

export { InputSelect };
