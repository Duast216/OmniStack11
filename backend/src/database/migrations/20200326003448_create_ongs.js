
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary(); // primary, porque é o principal
      table.string('name').notNullable(); // o primeiro table define que faz parte da tabela que está a ser criada o segundo define que os elementos dessa linha serão do tipo STRING, o seu parâmetro é o nome da Coluna, e o notNullable é porque não pode ser nulo
      table.string('email').notNullable(); // porque não pode ser nulo
      table.string('whatsapp').notNullable(); // porque não pode ser nulo
      table.string('city').notNullable(); // porque não pode ser nulo
      table.string('uf', 2).notNullable(); // porque não pode ser nulo
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
  };
