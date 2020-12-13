import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Employee from '../models/Employee';
import EmployeesRepository from '../repositories/EmployeesRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  job: string;
  level: number;
}


class CreateEmployeeService {
  public async execute({ name, email, password, job, level }: Request): Promise<Employee> {
    const employeesRepository = getCustomRepository(EmployeesRepository);

    const findEmployeeEmail = await employeesRepository.findByEmail(email);

    if (findEmployeeEmail) {
      throw Error('This employee is already booked');
    }

    const hashedPassword = await hash(password, 8);

    const employee = employeesRepository.create({
      name,
      email,
      password: hashedPassword,
      job,
      level,
    });

    await employeesRepository.save(employee);

    return employee;
  }
}

export default CreateEmployeeService;
