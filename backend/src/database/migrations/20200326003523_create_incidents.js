
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); // incrementa 

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); // decimal - float

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); // Esta linha está a indicar que o elemento desta tabela chamado ong_id está diretamente relacionado com o elemento id da outra tabela. O foreign é usado para criar chaves estrangeiras
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};