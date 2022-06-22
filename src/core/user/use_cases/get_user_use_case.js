import { UserRepository } from '../repositories/user.repository';

const GetUserUseCase = body => UserRepository.getUser();

export { GetUserUseCase };
