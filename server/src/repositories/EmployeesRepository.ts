import { EntityRepository, Repository } from 'typeorm';

import Employee from '../models/Employee';

@EntityRepository(Employee)
class EmployeesRepository extends Repository<Employee> {
  public async findByEmail(email: string): Promise<Employee | null> {
    const findEmployee = await this.findOne({
      where: { email },
    });

    return findEmployee || null;
  }
}

export default EmployeesRepository;
