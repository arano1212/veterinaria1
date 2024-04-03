/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('owner')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('owner', (table) => {
                table.increments("owner_id").primary();
                table.string("first_name").notNullable();
                table.string("last_name");
                table.string("phone").notNullable();    
                table.boolean("active").notNullable().defaultTo(true);
                table.timestamp("created_at").defaultTo(knex.fn.now());
            })
        }
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    cccc
  
};
