// Update with your config settings.

// o Knex criou vários ambientes de base de dados da aplicação

module.exports = {

  // Ambiente de desenvolvimento
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

    // Teste
    test: {
      client: 'sqlite3',
      connection: {
        filename: './src/database/test.sqlite'
      },
      migrations: {
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
    },

  // Ambiente de produção para a equipa de desenvolvimento. Simula o ambiente de produção para realização de testes
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // Ambiente de produção, ambiente final, para que clientes possam utilizar a aplicação
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
