/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação
 * Data: 25/10/2020
 * Author: Bruno Hoffmann
 */

import express from 'express';
import cors from 'cors';

const app = express();

import index from './routes/index';
import userRoute from './routes/user.routes';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', userRoute);

module.exports = app;