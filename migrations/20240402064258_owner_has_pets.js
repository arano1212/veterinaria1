const { table } = require("../config");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('pets')
    .then((exists) => {
        if (exists) {
            return knex.schema.hasColumn('pets', 'owner_id')
            .then((exists) => {
                if (!exists) {
                    return knex.schema.table('pets', (table) => {
                        table.integer('owner_id').unsigned().references('owner.owner_id');
                    })
                }
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('pets', (table) => {
        table.dropColumn('owner_id');
    });
  
};
