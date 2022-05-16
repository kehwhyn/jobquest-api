
exports.up = function(knex) {
  return knex.schema.createTable('areas', (table) => {
    table.increments('id_area').primary();
    table.string('nome').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('areas');
};
