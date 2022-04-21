const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE users CASCADE');
  await knex('users').del();

  for (let i = 1; i <= 10000; i++) {
    const first_name = faker.name.firstName();
    const last_name = faker.name.lastName();
    const provider = ['us.af.mil', 'dod.mil', 'spaceforce.mil'][Math.trunc(Math.random() * 3)];
    await knex('users').insert({
      // id: i, // Don't specify 'id' here - it breaks auto-incrementing later!
      username: faker.internet.userName(first_name, last_name),
      password_hash: faker.internet.password(),
      email: `${first_name}.${last_name}@${provider}`,
      first_name,
      last_name,
      is_admin: (Math.random() < 0.001)
    });
  };
};
