const express = require('express');
const cors = require('cors');

const { errors } = require( 'celebrate' );

const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

// Para instalar dependências para serem usadas apenas em desenvolvimento usamos o -D à frente do pedido de instalação. Ex: npm install nodemon -D

// npm - instala pacotes de serviços, instala dependências. Ex: npm install nodemon Ou corre a própria aplicação. Ex. npm start

// npx - executa uma das dependências. Ex: npx knex init


/**
 * Rota / Recurso
 * Rota: localhost:3333/users/... - É todo o url
 * Recurso: /users - É apenas o elemento que identifica parte do url
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar informação ao back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Remover uma informação no back-end 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo "?" e nome da variável (Filtros, paginação) - Ex: localhost:3000/users?name=Ricardo&page=2
 * Route Params: Parâmetros utilizados para identificar recursos - Ex: localhost:3000/users/:id
 * Request Body: Corpo da requisição, utilizador para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server | Banco de dados relacionais 
 * NoSQL: MongoDB, CouchDB, etc | Banco de dados não relacionais
 */

/**
 * Driver: SELECT * FROM users
 * Query Buidler: table('users').select('*').where()
 */


