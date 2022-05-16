
exports.up = function(knex) {
    return knex.schema.createTable('usuarios_turnos', (table) => {
      table.increments('id').primary();
  
      table.integer('id_usuario').unsigned();
      table.foreign('id_usuario').references('usuarios.id_usuario');

      table.string("turno").notNull();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuarios_turnos');
  };
  