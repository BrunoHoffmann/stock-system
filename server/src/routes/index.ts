import { Router } from 'express';
import employeeRouter from './employee.routes';

const routes = Router();

routes.use('/employees', employeeRouter);

export default routes;
