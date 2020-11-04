import { Router } from 'express';
import { Request, Response } from 'express';

const routes = Router();

routes.get('/api', (req: Request, res: Response) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem vindo(a) a API Node.js + Vue.js + PostgreSQL',
    version: '1.0.0'
  });
});

export default routes;
