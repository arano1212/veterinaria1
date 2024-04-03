/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('pets')
    .then((exists) => {
        if (exists) {
            return knex.schema.hasColumn('pets', 'vet_id')
            .then((exists) => {
                if (!exists) {
                    return knex.schema.table('pets', (table) => {
                        table.integer('vet_id').unsigned().references('veterinarians.vet_id');
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
  
};
