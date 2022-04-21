/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return (knex.schema.createTable('users_projects_join', (table) => {
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
    table.integer('project_id');
    table.foreign('project_id').references('projects.id');
  }))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('users_projects_join', (table) => {
    table.dropForeign('user_id');
    table.dropForeign('project_id');
  })  
  .then(function() {
    return knex.schema.dropTableIfExists('users_projects_join');
  });
};
