
exports.up = function(knex) {
  return knex.schema.createTable('area_habilidade', (table) => {
    table.increments('id').primary();

    table.integer('id_area').unsigned();
    table.foreign('id_area').references('areas.id_area');
    
    table.integer('id_habilidade').unsigned();
    table.foreign('id_habilidade').references('habilidades.id_habilidade');
    table.unique(['id_area','id_habilidade'])
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('area_habilidade');
};
