/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id');
    table.string('name');
    table.text('description');
    table.date('last_activity_at');
    table.string('ssh_url_to_repo');
    table.string('http_url_to_repo');
    table.string('web_url');
    table.string('avatar_url');
    table.integer('project_owner_id')
    table.foreign('project_owner_id').references('project_owners.id');
    table.integer('category_id');
    table.foreign('category_id').references('categories.id');
    table.string('status');
  });  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('projects', table => {
    table.dropForeign('project_owner_id');
    table.dropForeign('category_id');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('projects');
  })
};
