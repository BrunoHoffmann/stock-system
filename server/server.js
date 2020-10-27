/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução
 * Data: 24/10/2020
 * Author: Bruno Hoffmann
 */

const app = require('./src/app');

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log('Aplicação executando na porta ', port);
});

