import { GameRepository } from '../repositories/game.repository';

const FetchCurrentGamesUseCase = () => GameRepository.fetchCurrentGames();

export { FetchCurrentGamesUseCase };
