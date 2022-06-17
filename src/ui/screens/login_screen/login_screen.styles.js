import { StyleSheet } from 'react-native';
import { Size } from 'ui/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loginTitle: {
    fontSize: Size.xxl,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Medium',
  },
  loginSubtitle: {
    textAlign: 'center',
    marginBottom: 40,
  },
  loginContentContainer: {
    padding: 20,
  },
});
