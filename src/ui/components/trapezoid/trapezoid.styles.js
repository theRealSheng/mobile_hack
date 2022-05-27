import { StyleSheet } from 'react-native';
import { Colors } from 'ui/styles';

export const styles = StyleSheet.create({
  offsetContainer: {
    height: 140,
  },
  rotateContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 20,
    height: 180,
  },
  contentContainer: {
    backgroundColor: Colors.white,
    height: '70%',
    position: 'relative',
    top: -80,
    paddingRight: 50,
    paddingLeft: 50,
  },
});
