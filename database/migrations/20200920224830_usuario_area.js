
exports.up = function(knex) {
  return knex.schema.createTable('usuario_area', (table) => {
    table.increments('id').primary();

    table.integer('id_usuario').unsigned();
    table.foreign('id_usuario').references('usuarios.id_usuario');

    table.integer('id_area').unsigned();
    table.foreign('id_area').references('areas.id_area');
    table.unique(['id_usuario','id_area'])
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario_area');
};
