
exports.up = function(knex) {
  return knex.schema.createTable('usuario_habilidade', (table) => {
    table.increments('id').primary();

    table.integer('id_usuario').unsigned();
    table.foreign('id_usuario').references('usuarios.id_usuario');

    table.integer('id_habilidade').unsigned();
    table.foreign('id_habilidade').references('habilidades.id_habilidade');
    table.unique(['id_usuario','id_habilidade'])
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario_habilidade');
};
