

exports.up = function(knex) {
    return knex.schema.createTable('horario', (table) => {
      table.integer('id_horario').primary();
      table.string('nome');

    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('horario');
  };
  