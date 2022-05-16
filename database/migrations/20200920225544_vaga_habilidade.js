
exports.up = function(knex) {
  return knex.schema.createTable('vaga_habilidade', (table) => {
    table.increments('id').primary();

    table.integer('id_vaga').unsigned();
    table.foreign('id_vaga').references('vagas.id_vaga');

    table.integer('id_habilidade').unsigned();
    table.foreign('id_habilidade').references('habilidades.id_habilidade');
    table.unique(['id_vaga','id_habilidade'])
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('vaga_habilidade');
};
