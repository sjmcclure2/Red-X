/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return (knex.schema.createTable('requests_projects_join', (table) => {
    table.increments('id');
    table.integer('request_id');
    table.foreign('request_id').references('requests.id');
    table.integer('project_id');
    table.foreign('project_id').references('projects.id');
  }))  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('requests_projects_join', (table) => {
    table.dropForeign('request_id');
    table.dropForeign('project_id');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('requests_projects_join');
  });
};
