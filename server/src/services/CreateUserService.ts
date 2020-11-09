import { getCustomRepository } from 'typeorm';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public execute({ name, email, password }: Request): User {
    const UsersRepository = getCustomRepository(UsersRepository);

  }
}
