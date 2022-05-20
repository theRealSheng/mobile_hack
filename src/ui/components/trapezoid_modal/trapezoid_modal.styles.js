import { StyleSheet } from 'react-native';
import { Colors, Size } from 'ui/styles';

export const styles = StyleSheet.create({
  offsetContainer: {
    height: '20%',
  },
  rotateContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 20,
    height: '20%',
  },
  contentContainer: {
    backgroundColor: Colors.white,
    height: '70%',
    position: 'relative',
    top: -80,
    paddingRight: 50,
    paddingLeft: 50,
  },
  backArrowButton: {
    position: 'absolute',
    top: -70,
    left: 60,
  },
  modalTitle: {
    fontSize: Size.xxl,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Medium',
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
