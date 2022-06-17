import { StyleSheet } from 'react-native';
import { Space, Size } from 'ui/styles';

export default StyleSheet.create({
  inputIOS: {
    paddingVertical: Space.sm,
    paddingHorizontal: Space.sm,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  inputAndroid: {
    paddingHorizontal: Space.sm,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: 'black',
  },
  iconContainer: {
    position: 'relative',
    marginLeft: '95%',
    width: Space.lg,
    alignItems: 'center'
  },
  input: {
    fontSize: Size.xl,
    color: 'black',
  },
  placeholder: {
    color: 'purple',
    fontSize: Size.xxl,
    fontWeight: 'bold',
  },
});
