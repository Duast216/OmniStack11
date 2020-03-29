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

    routes.get('/users', (request, response) => {
        // Esta é a forma de ir buscar variáveis enviadas por QUERY PARAMS
        const query = request.query;
        console.log(query)

        // Esta é a forma de ir buscar variáveis enviadas por ROUTE PARAMS
        const params = request.params;
        console.log(params);

        // Esta é a forma de ir buscar variáveis enviadas por REQUEST BODY
        const body = request.body;
        console.log(body);


        return response.json({
            event: 'Semana OmniStack',
            aluno: 'Ricardo Martins'
        });
    });

/**
 * A primeira coisa a realizar para iniciar o desenvolvimento do back-end é perceber a estrutura da aplicação. Perceber quais são as ENTIDADES que vão existir na aplicaçãom e as FUNCIONALIDADES da aplicação
 */

/**
 * De forma a criar as tabelas de base de dados, o ideal é usar migrações.
 * As migrações não só criam as tabelas de base de dados, como permitem manter um histórico sempre que a estrutura das mesmas é alterada.
 * Para isso, deves criar uma pasta onde vais guardar as migrações, e adicionar ao ficheiro knexfile.js o diretório onde vais guardar as migrações como neste exemplo:
    development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },
 * 
 */

/**
 * As tabelas são criadas desta maneira:
 * exports.up = function(knex) {
    *  return knex.schema.createTable('ongs', function(table) {
            table.string('id').primary(); // primary, porque é o principal
            table.string('name').notNullable(); // o primeiro table define que faz parte da tabela que está a ser criada o segundo define que os elementos dessa linha serão do tipo STRING, o seu parâmetro é o nome da Coluna, e o notNullable é porque não pode ser nulo
            table.string('uf', 2).notNullable(); // o segundo parâmetro - 2 - significa que cada elemento deste tipo, só pode ter 2 caracteres
        });
    };

    Isto é colocado no método UP do KNEX de forma a criar a tabela, se eu quiser refazer a tabela, tenho que a apagar. 
    Para isso, uso o método Down:
    exports.down = function(knex) {
        return knex.schema.dropTable('ongs');
    };
 */

/**
 * Para correr a migração e criar a tabela, usamos: npx knex migrate:latest
 */


 /**
  * Testes unitários testam funções que fazem um única coisa. E encontram-se dentro da nossa aplicação.
  */