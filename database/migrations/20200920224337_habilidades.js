
exports.up = function(knex) {
  return knex.schema.createTable('habilidades', (table) => {
    table.increments('id_habilidade').primary();
    table.string('nome').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('habilidades');
};
