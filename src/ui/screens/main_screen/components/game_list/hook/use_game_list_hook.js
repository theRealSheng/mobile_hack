import React, { useEffect, useState } from 'react';

import { STATUS_CODES } from 'common/constants'
import { FetchCurrentGamesUseCase } from 'core/game/use_cases';

const useGameList = () => {
  const [currentGames, setCurrentGames] = useState([]);

  useEffect(() => {
    const fetchCurrentGames = async () => {
      try {
        const currentGamesRes = await FetchCurrentGamesUseCase();
        if (currentGamesRes.status === STATUS_CODES.STATUS_OK) {
          const { data } = currentGamesRes.data;
          //@TODO  - Check data comes correctly
          setCurrentGames(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchCurrentGames();
  }, []);

  return {
    currentGames,
  };
};

export { useGameList };
