/**
 * Arquivo: src/routes/user.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a class User
 * Data: 25/10/2020 
 * Author: Bruno Hoffmann
 */

const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// => Definindo as rotas do CRUD - 'User':

router.get('/user', userController.listAllUsers);

// => Rota responsávle por criar um novo 'User' (POST): localhost
router.post('/user/add', userController.createUser);

module.exports = router;