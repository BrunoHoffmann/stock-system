/**
 * Arquivo: src/controllers/user.controller.js
 * Descrição: arquivo responsável pelo controller dos usuarios
 * Data: 25/10/2020 
 * Author: Bruno Hoffmann
 */
const { string } = require('joi');
const Joi = require('joi');
const db = require('../config/database');

// => Método responsável por mostrar todos os usuarios
exports.listAllUsers = async(req, res) => {
  const response = await db.query('select * from users');

  res.status(200).send(response.rows);
};

// => Método responsável por obter um usuario
exports.getUser = async(req, res) => {
  const id = parseInt(req.params.id);

  const { rows } = await db.query('select * from users where id = $1', [id]);

  res.status(200).send(rows);
}

// => Método responsável por criar um novo 'User':
exports.createUser = async(req, res) => {
  const { name, email, password, active } = req.body;

  //verificar erro do joi e ver porque a porta fica se perdendo...
  const { rows } = await db.query(
    'insert into users (name, email, password, active) values ($1, $2, $3, $4)',
    [name, email, password, active]
  );

  res.status(201).send({
    message: 'User added successfully!',
    body: {
      user: {name, email, password, active}
    },
  });
};



// => Método responsável por deletar um usuario
exports.deleteUser = async(req, res) => {
  const id = parseInt(req.params.id);
  const { rows } = await db.query('delete from users where id = $1',
    [id]
  );

  res.status(200).send({ message: 'User deleted successfully!' });
}