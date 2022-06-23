import { GameRepository } from '../repositories/game.repository';

const FetchOldGamesUseCase = () => GameRepository.fetchOldGames();

export { FetchOldGamesUseCase };
