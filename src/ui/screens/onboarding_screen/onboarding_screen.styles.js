import { StyleSheet } from 'react-native';
import { Colors, Size } from 'ui/styles';

export default StyleSheet.create({
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
    marginTop: 10,
    marginBottom: 15,
  },
});
