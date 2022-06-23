import React, { createContext, useContext, useState, useCallback } from 'react';

import { RespondGameQuestionUseCase } from 'core/game/use_cases';

const GameContext = createContext(null);

const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within an GameContextProvider');
  }
  return context;
};

const GameContexProvider = ({ children }) => {
  //@TODO - Connect Socket IO

  const value = {};

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export { GameContext, GameContexProvider, useGameContext };
