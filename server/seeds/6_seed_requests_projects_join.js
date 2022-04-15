/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('requests_projects_join').del()
  
  for(let i = 1; i <= 500; i++) {
    const request_id = Math.trunc(Math.random() * 500) + 1;
    const [ { category_id } ] =
      await knex('requests')
      .where('id', request_id)
      .select('category_id');
    const matching_proj_ids =
      await knex('projects')
      .where('category_id', category_id)
      .select('id');
    const project_id =
      matching_proj_ids[
        Math.trunc(Math.random() * matching_proj_ids.length)
      ].id;
    await knex('requests_projects_join').insert({
      request_id,
      project_id
    });
  };
};
