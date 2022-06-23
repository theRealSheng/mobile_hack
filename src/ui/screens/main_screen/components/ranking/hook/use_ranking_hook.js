import React, { useCallback, useEffect, useState } from 'react';

import { STATUS_CODES } from 'common/constants';
import { FetchOldGamesUseCase } from 'core/game/use_cases';
// @TODO - Testing for users ranking list
// const users = ['Irene', 'Hamsa', 'Sheng', 'John', 'Tom'];

const useRanking = () => {
  const [oldGames, setOldGames] = useState([]);
  const [showRankingList, setShowRankingList] = useState(null);

  useEffect(() => {
    const fetchOldGames = async () => {
      try {
        const oldGamesRes = await FetchOldGamesUseCase();

        if (oldGamesRes.status === STATUS_CODES.STATUS_OK) {
          const { data } = oldGamesRes.data;
          //@TODO - Check data is getting correctly
          setOldGames(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchOldGames();
  }, []);

  const onSelectView = useCallback(game => {
    //@TODO - Save ranking list of this game
    setShowRankingList(game);
  }, []);

  return {
    oldGames,
    showRankingList,
    onSelectView,
  };
};

export { useRanking };
