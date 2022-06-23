import { StyleSheet } from 'react-native';
import { Size, Space } from 'ui/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'transparent',
  },
  onboardingTitle: {
    fontSize: Size.xxl,
    marginBottom: 20,
    fontFamily: 'RobotoSlab-Medium',
  },
  roomOwner: {
    marginTop: 5,
    marginBottom: 10,
  },
  backArrowButton: {
    position: 'absolute',
    top: -70,
    left: 30,
  },
  scrollView: {
    flex: 1,
  },
  input: {
    marginBottom: Space.lg,
  },
  modalTitle: {
    fontSize: Size.xxl,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Medium',
  },
  selectTimeText: {
    marginBottom: 20,
  },
  timeChipsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButtonContainer: {
    marginTop: 40,
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
