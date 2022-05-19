import { StyleSheet } from 'react-native';
import { Colors, Size } from 'ui/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
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
});
