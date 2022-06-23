import { StyleSheet } from 'react-native';
import { Colors, Space } from 'ui/styles';

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
  squareButton: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    padding: 10,
  },
  textRound: {
    backgroundColor: Colors.primary,
    paddingTop: Space.xs,
    paddingBottom: Space.xs,
    alignSelf: 'flex-start',
    paddingLeft: Space.sm,
    paddingRight: Space.sm,
    borderRadius: Space.md,
  },
});
