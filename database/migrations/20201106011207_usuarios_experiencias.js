
exports.up = function(knex) {
  return knex.schema.createTable('usuario_experiencia', (table) => {
    table.increments('id_usuario_experiencia').primary();
    table.integer('id_usuario').unsigned();
    table.foreign('id_usuario').references('usuarios.id_usuario');
    table.string("local").notNull();
    table.string("funcao").notNull();
    table.date('data_inicio').notNull();
    table.date('data_fim');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario_experiencia');
};
