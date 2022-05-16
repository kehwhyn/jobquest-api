
exports.up = function(knex) {
  return knex.schema.createTable('vagas', (table) => {
    table.increments('id_vaga').primary();
    table.integer('id_empresa').unsigned().notNull();
    table.foreign('id_empresa').references('empresas.id_empresa');
    table.integer('id_area').unsigned();
    table.foreign('id_area').references('areas.id_area');
    table.string('nome').notNull();
    table.integer('quantidade').notNull();
    table.text('descricao').notNull();
    table.text('horario');
    table.text('endereco');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('vagas');
};
