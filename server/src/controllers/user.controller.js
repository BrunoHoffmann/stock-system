/**
 * Arquivo: src/controllers/user.controller.js
 * Descrição: arquivo responsável pelo controller dos usuarios
 * Data: 25/10/2020 
 * Author: Bruno Hoffmann
 */

 const db = require('../config/database');

 // => Método responsável por criar um novo 'User':
 exports.createUser = async(req, res) => {
   const { name, email, password, active } = req.body;
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