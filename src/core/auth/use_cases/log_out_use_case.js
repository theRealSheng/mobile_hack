import { AuthRepository } from '../repositories/auth.repository';

const LogOutUseCase = () => AuthRepository.logOut();

export { LogOutUseCase };
