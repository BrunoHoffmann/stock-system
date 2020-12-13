import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import EmployeesRepository from '../repositories/EmployeesRepository';
import CreateEmployeeService from '../services/CreateEmployeeService';

const employeesRouter = Router();

employeesRouter.get('/', async (request, response) => {
  const employeesRepository = getCustomRepository(EmployeesRepository);

  const employees = await employeesRepository.find();

  return response.json(employees);
});

employeesRouter.post('/create', async(request, response) => {
  try {
    const { name, email, password, job, level } = request.body;

    const createEmployee = new CreateEmployeeService();

    const employee = await createEmployee.execute({
      name,
      email,
      password,
      job,
      level,
    });

    return response.json(employee);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default employeesRouter;
