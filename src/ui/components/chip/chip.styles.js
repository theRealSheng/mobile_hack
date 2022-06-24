import { StyleSheet } from 'react-native';
import { Colors, Space } from 'ui/styles';

export default StyleSheet.create({
  chip: {
    backgroundColor: Colors.primaryLight,
    padding: Space.xs,
    paddingLeft: Space.sm,
    paddingRight: Space.sm,
    marginBottom: Space.xs,
    borderRadius: Space.md,
    alignSelf: 'flex-start',
  },
});
