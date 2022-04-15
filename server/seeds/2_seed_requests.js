const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE requests CASCADE');
  await knex('requests').del();

  for(let i = 1; i <= 500; i++) {
    const user_id = Math.trunc(Math.random() * 10000) + 1;
    const description = faker.hacker.phrase();
    const category_id = Math.trunc(Math.random() * 7) + 1;
    const is_resolved = Math.random() < 0.5;
    const priority = Math.trunc(Math.random() * 3) + 1;
    await knex('requests').insert({
      id: i, 
      user_id,
      description,
      category_id,
      is_resolved,
      priority
    });
  };
}
