/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('project_owners', table => {
    table.increments('id');
    table.string('name');
    table.string('path');
    table.string('kind');
    table.string('full_path');
    table.integer('parent_id');
    table.string('avatar_url');
    table.string('web_url');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_owners');
};
