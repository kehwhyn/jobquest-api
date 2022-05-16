
exports.up = function(knex) {
  return knex.schema.createTable('match_usuario_vaga', (table) => {
    table.increments('id_match').primary();
    table.integer('id_area').unsigned();
    table.foreign('id_area').references('areas.id_area');
    
    table.integer('id_vaga').unsigned();
    table.foreign('id_vaga').references('vagas.id_vaga');

    table.integer('id_usuario').unsigned();
    table.foreign('id_usuario').references('usuarios.id_usuario');
    table.unique(['id_vaga','id_usuario'])

    table.string('status', 1);
    table.datetime('updated_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('match_usuario_vaga');
};
