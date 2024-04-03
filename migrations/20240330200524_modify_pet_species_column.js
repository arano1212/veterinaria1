/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('pets', function(table) {
        table.renameColumn('spicies', 'species');
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('pets', function(table) {
        table.renameColumn('species', 'spicies');
      });
  
};
