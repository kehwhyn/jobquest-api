
exports.up = function(knex) {
  return knex.schema.createTable('empresas', (table) => {
    table.increments('id_empresa').primary();
    table.string('razao_social');
    table.string('logo_url');

    table.integer('id_usuario').unsigned();
    table.foreign('id_usuario').references('usuarios.id_usuario');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('empresas');
};
 