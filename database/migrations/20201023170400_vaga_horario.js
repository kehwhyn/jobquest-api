
exports.up = function(knex) {
    return knex.schema.createTable('vaga_horario', (table) => {
      table.increments('id').primary();

      table.integer('id_horario').unsigned();
      table.integer('id_vaga').unsigned();
      table.foreign('id_vaga').references('vagas.id_vaga');
  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('vaga_horario');
  };
  