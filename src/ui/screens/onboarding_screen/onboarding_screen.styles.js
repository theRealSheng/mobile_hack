import { StyleSheet } from 'react-native';
import { Colors, Size, Space } from 'ui/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: Space.md,
    paddingRight: Space.md,
    justifyContent: 'space-between',
  },
  questionText: {
    fontSize: Size.xxl,
    marginBottom: Space.lg,
    fontFamily: '../../assets/fonts/RobotoSlab-Medium.tff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: Space.md,
  },
  optionsWrapper: {
    paddingBottom: Space.xl,
    marginBottom: Space.md,
  },
  buttonNext: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    padding: Space.sm,
    width: 120,
    borderRadius: Space.xs,
    marginLeft: 'auto',
  },
  buttonPrevious: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: Space.sm,
    width: 120,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 'auto',
  },
  buttonPreviousInvisible: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: Space.sm,
    width: '40%',
    borderRadius: 3,
    margin: Space.xs,
    borderWidth: 1,
    borderColor: 'black',
    visibility: 'hidden',
  },
  topText: {
    fontSize: Size.xl,
    fontFamily: '../../assets/fonts/RobotoSlab-Thin.tff',
    fontWeight: '200',
  },
  topViewContainer: {
    flex: 1,
  },
  roundedBorder: {
    borderWidth: 1.3,
    borderRadius: 30,
    borderColor: 'black',
    padding: Space.xs,
    width: 30,
    alignItems: 'center',
  },
  textView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Space.sm,
  },
  innerTextView: {
    padding: Space.xs,
  },
  topView: {
    paddingTop: Space.md,
    paddingLeft: 40,
    position: 'relative',
  },
});
