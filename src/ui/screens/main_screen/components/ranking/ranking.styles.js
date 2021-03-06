import { StyleSheet } from 'react-native';
import { Size, Space, Colors } from 'ui/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 120,
  },
  heading: {
    fontSize: Size.xxl,
    marginBottom: Space.md,
    fontFamily: 'RobotoSlab-Medium',
  },
  content: {
    paddingLeft: Space.sm,
    marginTop: Space.xs,
  },
  ranking: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: Space.sm,
    fontSize: Size.l,
  },
  btnWrapper: {
    marginTop: Space.sm,
  },
  btnText: {
    fontSize: Size.m,
  },
  rankingItem: {
    width: '100%',
    height: 0,
    borderBottomWidth: Space.xl,
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
    marginBottom: Space.md,
  },
  position: {
    position: 'absolute',
    width: Space.lg,
    height: Space.lg,
    borderRadius: Space.lg,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    left: -Space.lg,
    top: Space.sm,
  },
  user: {
    position: 'absolute',
    top: 25,
    left: 30,
    fontSize: Size.xl,
    fontWeight: '500',
  },
});
