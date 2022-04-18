/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_projects_join').del();

  const project_ids =
    await knex('projects')
    .select('id');

  for(let i = 1; i <= 500; i++) {
    const user_id = Math.trunc(Math.random() * 10000) + 1;
    const project_id = 
      project_ids[
        Math.trunc(Math.random() * project_ids.length)
      ].id;
    await knex('users_projects_join').insert({
      user_id,
      project_id
    });
  }
};
