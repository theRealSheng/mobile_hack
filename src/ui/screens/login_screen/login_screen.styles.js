import { StyleSheet } from 'react-native';
import { Size, Space, Colors } from 'ui/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: Space.md,
    top: Space.lg,
    zIndex: 1000,
  },
  loginTitle: {
    fontSize: Size.xxl,
    marginBottom: Space.sm,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Medium',
  },
  loginSubtitle: {
    textAlign: 'center',
    marginBottom: Space.md,
  },
  loginContentContainer: {
    padding: 20,
  },
  input: {
    marginBottom: Space.md,
  },
  errorMessage: {
    color: Colors.error,
    marginBottom: Space.sm,
  },
});
