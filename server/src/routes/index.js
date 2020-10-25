/**
 * Arquivo src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
  * Data: 24/10/2020
  * Author: Bruno Hoffmann
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true', 
    message: 'Seja bem vindo(a) a API Node.js + Vue.js + PostgreSQL',
    version: '1.0.0'
  });
});

module.exports = router;