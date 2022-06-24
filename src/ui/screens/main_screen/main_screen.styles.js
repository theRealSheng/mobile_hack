import { StyleSheet } from 'react-native';
import { Size, Colors, Space } from 'ui/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  nav: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: Space.lg,
    paddingTop: Space.md,
    paddingBottom: Space.md,
  },
  tab: {
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: -Space.sm,
  },
  selected: {},
  unselected: {
    color: Colors.gray,
  },
});
