/**
 * Arquivo config/database.js
 * Descrição: arquivo responsável pelas 'connectionString
 */

import { Pool } from 'pg';
import dotenv from'dotenv';
import { ArraySchema } from 'joi';

dotenv.config();

// => Conexão com a base de dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text: string, params = []) => pool.query(text, params),
};