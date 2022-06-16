import { StyleSheet } from 'react-native';
import { Colors, Size } from 'ui/styles';

export default StyleSheet.create({
  roomBlock: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  cardImage: {
    zIndex: 1,
  },
  card: {
    width: 200,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.8,
    borderRadius: 8,
    paddingLeft: 30,
  },
  cardContentContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  cardTitle: {
    fontSize: Size.xl,
    fontFamily: 'RobotoSlab-SemiBold',
  },
  buttonContainer: {
    position: 'absolute',
    right: -20,
  },
  roundedButton: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
