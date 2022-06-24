import { StyleSheet } from 'react-native';
import { Colors, Size, Space } from 'ui/styles';

export default StyleSheet.create({
  roomBlock: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  avatar: {
    position: 'absolute',
    left: 0,
    bottom: -5,
    zIndex: Space.xxl,
  },
  cardImage: {
    zIndex: 1,
  },
  card: {
    width: 280,
    height: 0,
    borderBottomWidth: 140,
    borderBottomColor: 'white',
    borderLeftWidth: Space.lg,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position: 'relative',
    borderRadius: Space.sm,
    shadowColor: Colors.black,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginRight: Space.xs,
  },
  cardContentContainer: {
    justifyContent: 'center',
    height: 140,
    width: 170,
    position: 'absolute',
    paddingLeft: Space.md,
  },
  cardTitle: {
    fontSize: Size.xl,
    fontFamily: 'RobotoSlab-SemiBold',
  },
  buttonContainer: {
    position: 'absolute',
    right: Space.md,
    top: Space.lg,
  },
});
