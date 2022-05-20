import { StyleSheet } from 'react-native';
import { Size } from 'ui/styles';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
});
