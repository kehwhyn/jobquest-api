
exports.up = function(knex) {
    return knex.schema.alterTable('usuarios',  ( table ) => {
      table.string('telefone_casa');
      table.string('telefone_celular');
    });
};
  
exports.down = function(knex) {
    return knex.schema.alterTable('usuarios', ( table ) => {
        table.dropColumn('telefone_casa');
        table.dropColumn('telefone_celular');    
    });
};