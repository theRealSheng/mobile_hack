import { StyleSheet } from 'react-native';
import { Colors } from 'ui/styles';

export default StyleSheet.create({
  roundedButton: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
