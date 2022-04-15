/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return (knex.schema.createTable('requests', (table) => {
    table.increments('id');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
    table.text('description');
    table.integer('category_id');
    table.foreign('category_id').references('categories.id');
    table.boolean('is_resolved');
    table.integer('priority');
  }));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('requests', (table) => {
    table.dropForeign('user_id');
    table.dropForeign('category_id');
  })
  .then(function () {
    return knex.schema.dropTableIfExists('requests');
  })
};
