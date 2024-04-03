/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('veterinarians')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('veterinarians', (table) => {
                table.increments("vet_id").primary();
                table.string("first_name").notNullable();
                table.string("last_name");
                table.integer("age").notNullable();   
                table.integer("years_experience").notNullable();
                table.string("license").notNullable();
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
    return knex.schema.dropTableIfExists("veterinarians")
  
};
