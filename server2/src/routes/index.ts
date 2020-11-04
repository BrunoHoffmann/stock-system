/**
 * Arquivo src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
  * Data: 24/10/2020
  * Author: Bruno Hoffmann
 */

import { Request, Response } from 'express';

//const router = express.Router();

router.get('/api', (req: Request, res: Response) => {
  res.status(200).send({
    success: 'true', 
    message: 'Seja bem vindo(a) a API Node.js + Vue.js + PostgreSQL',
    version: '1.0.0'
  });
});

module.exports = router;