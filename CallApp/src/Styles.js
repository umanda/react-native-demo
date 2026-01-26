import {StyleSheet} from 'react-native';
import COLOR from './Color';

export default StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textButton: {
    color: COLOR.BUTTON,
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 20,
    textAlign: 'center',
  },
  button: {
    width: 100,
    alignSelf: 'center',
  },
  forminput: {
    padding: 5,
    marginBottom: 10,
    color: COLOR.ACCENT,
    height: 40,
    borderColor: COLOR.ACCENT,
    borderWidth: 1,
    borderRadius: 4,
  },
  selfview: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 100,
    height: 120,
  },
  remotevideo: {
    flex: 1,
  },
  videoPanel: {
    flex: 1,
    position: 'relative',
  },
  margin: {
    margin: 10,
  },
  callConnectingLabel: {
    fontSize: 18,
    alignSelf: 'center',
  },
  callControls: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  callControlsVideo: {
    height: 120,
  },
  incomingCallText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 22,
  },
  incomingCallButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90,
  },
});
