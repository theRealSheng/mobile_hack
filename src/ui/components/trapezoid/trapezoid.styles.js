import { StyleSheet } from 'react-native';
import { Colors, Space } from 'ui/styles';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  offsetContainer: {
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  rotateContainer: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: '92.5%',
    width: '100%',
    position: 'absolute',
    bottom: Space.lg,
    transform: [{ skewY: '20deg' }, { translateY: 80 }],
  },
  contentContainer: {
    backgroundColor: Colors.white,
    height: '70%',
    position: 'absolute',
    bottom: 0,
    paddingRight: Space.md,
    paddingLeft: Space.md,
    width: '100%',
  },
  personIcon:{
    position: 'absolute',
    top: -Space.md,
    right: Space.md,
  },
});
