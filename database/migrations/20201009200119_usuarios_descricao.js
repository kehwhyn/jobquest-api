
exports.up = function(knex) {
    return knex.schema.alterTable('usuarios',  ( table ) => {
        table.string('descricao');
        table.time('updated_at');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('usuarios', ( table ) => {
        table.dropColumn('descricao'); 
        table.dropColumn('updated_at');
    });
};
