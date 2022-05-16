
exports.up = function (knex) {
  return knex.schema.alterTable('empresas', (table) => {
    table.string('url_site');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('empresas', (table) => {
    table.dropColumn('url_site');
  });
};
