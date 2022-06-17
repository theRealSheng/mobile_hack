import React from 'react';
import { wrapState } from 'ui/hoc/joint_context';
import { GameScreenView } from './game_screen.view';

const mapProps = ({ }) => {
    return {
    };
  };
  
  const GameScreen = wrapState(GameScreenView, mapProps, [
    // wrapContextComponent('authContext', AuthContext),
  ]);
  
  export { GameScreen };
