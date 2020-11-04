/**
 * Arquivo: src/routes/user.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a class User
 * Data: 25/10/2020
 * Author: Bruno Hoffmann
 */

//import router from 'express-promise-router';
const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// => Definindo as rotas do CRUD - 'User':

// => Route responsável por listar os usuarios
router.get('/user', userController.listAllUsers);

// => Route responsável por obter um usuario
router.get('/user/:id', userController.getUser);

// => Rota responsável por criar um novo 'User' (POST): localhost
router.post('/user/add', userController.createUser);

// => Rota responsável por pegar o usuario para a tela de edição do usuario
router.get('/user/edit/:id', userController.editUser);

// => Rota responsável por alterar um usuario
router.post('/user/edit/:id', userController.updateUser);

// => Rota responsável por deletar um usuario
router.get('/user/delete/:id', userController.deleteUser);

module.exports = router;
