// para mais informações acesse: http://knexjs.org/
exports.up = function(knex) {
  return knex.schema.createTable('usuarios',  ( table ) => {
    // Informações do Banco
    table.increments('id_usuario').primary();
    table.string('tipo_usuario').notNull();
    
    // Informações do Usuário
    table.string('mail').notNull().unique();
    table.string('senha').notNull();
    table.string('nome').notNull();
    table.string('cpf_cnpj').unique();
    table.string('uf');
    table.string('rua');
    table.string('bairro');
    table.string('cidade');
    table.string('complemento');
    table.string('numero');
    table.string('cep');
    table.string('url_foto');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
};
