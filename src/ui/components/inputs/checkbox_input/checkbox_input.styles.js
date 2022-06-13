import { StyleSheet } from 'react-native';
import { Space, Size } from 'ui/styles';

export default StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Space.md,
    padding: Space.xs,
  },
  label: {
    marginLeft: Space.xs,
    fontSize: Size.xl
  },
});
