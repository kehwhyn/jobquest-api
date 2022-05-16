
exports.up = function(knex) {
  return knex.schema.alterTable('usuario_habilidade',  ( table ) => {
      table.string('instituicao');
      table.date('data_inicio');
      table.date('data_fim');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('usuario_habilidade', ( table ) => {
      table.dropColumn('instituicao');
      table.dropColumn('data_inicio');
      table.dropColumn('data_fim');
  });
};
