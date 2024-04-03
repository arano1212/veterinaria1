/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('pets')
    .then((exists)=>{
        if(!exists){
            return knex.schema.createTable('pets' , (table) => {
                table.increments("pet_id").primary();
                table.string("name").notNullable();
                table.string("spicies").notNullable();
                table.string("breed").notNullable();
                table.integer("age").notNullable();
                table.boolean("active").notNullable().defaultTo(true);
                table.timestamp("created_at").defaultTo(knex.fn.now())
            })

        }

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pets');
  
  };