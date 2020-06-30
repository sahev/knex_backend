// Responsavel pela criação da tabela
exports.up = function(knex) {
   return knex.schema.table('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('cpf').notNullable();
        table.string('birthdate').notNullable();
        table.string('addressline').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
  
};
// Responsavel por deletar a tabela
exports.down = function(knex) {
 return   knex.schema.dropTable('ongs');
  
};
