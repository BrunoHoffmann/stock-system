/**
 * Arquivo: src/controllers/user.controller.js
 * Descrição: arquivo responsável pelo controller dos usuarios
 * Data: 25/10/2020 
 * Author: Bruno Hoffmann
 */
const { string } = require('joi');
const Joi = require('joi');
const db = require('../config/database');

// => Método responsável por criar um novo 'User':
exports.createUser = async(req, res) => {
  const { name, email, password, active } = req.body;

  const userSchema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),

    email: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),

    email: string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    
    active: string()
      .max(1)
      .min(1)
      .required(),
  });

  const teste = userSchema.validade({name: name});
  console.log(teste);
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

// => Método responsável por mostrar todos os usuarios
exports.listAllUsers = async(req, res) => {
  const response = await db.query('select * from users');

  res.status(200).send(response.rows);
};