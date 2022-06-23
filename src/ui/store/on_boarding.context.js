import React, { createContext, useContext, useState, useCallback } from 'react';

const OnBoardingContext = createContext(null);

const useOnBoardingContext = () => {
  const context = useContext(OnBoardingContext);
  if (!context) {
    throw new Error('useOnBoardingContext must be used within an OnBoardingContexProvider');
  }
  return context;
};

const OnBoardingContexProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswer] = useState([]);

  return (
    <OnBoardingContext.Provider
      value={{
      }}>
      {children}
    </OnBoardingContext.Provider>
  );
};

export { OnBoardingContext, OnBoardingContexProvider, useOnBoardingContext };
