import { AuthRepository } from '../repositories/auth.repository';

const LogInUseCase = (email, password) => AuthRepository.login(email, password);

export { LogInUseCase };
