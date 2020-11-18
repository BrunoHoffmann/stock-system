import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return response.json(users);
});

usersRouter.post('/add', async(request, response) => {
  try {
    const { name, email, password, active } = request.body;

    const CreateUser = new CreateUserService();

    const user = await CreateUser.execute({
      name,
      email,
      password,
      active,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
