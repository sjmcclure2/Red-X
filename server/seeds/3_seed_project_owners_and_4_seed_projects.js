const axios = require('axios').default;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE project_owners CASCADE');
  await knex('project_owners').del();
  await knex.schema.raw('TRUNCATE projects CASCADE');
  await knex('projects').del();

  for (let i = 1; ; i++) {
    console.log('page', i);
    const url = `https://repo1.dso.mil/api/v4/projects/?page=${i}`;
    const projects = (await axios.get(url)).data;
    console.log('contains', projects.length, 'projects');
    if (!projects.length) break;
    await knex('project_owners').insert(
      projects.map(p => p.namespace)
    ).onConflict().ignore();
    await knex('projects').insert(
      projects.map(p => {
        const {
          id,
          name,
          description,
          last_activity_at,
          ssh_url_to_repo,
          http_url_to_repo,
          web_url,
          avatar_url
        } = p;
        const category_id = Math.trunc(Math.random() * 7) + 1;
        const age = (Date.now() - Date.parse(p.last_activity_at))
          / 1000 / 60 / 60 / 24;
        const status = age < 180 ? 'active' : 'inactive';
        return {
          id,
          name,
          description,
          last_activity_at,
          ssh_url_to_repo,
          http_url_to_repo,
          web_url,
          avatar_url,
          project_owner_id: p.namespace.id,
          category_id,
          status
        };
      })
    );
  };
};
