/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE categories CASCADE');
  await knex('categories').del();

  const names = [
    'admin',
    'aircraft mx',
    'aircraft ops',
    'flightline mx',
    'flightline ops',
    'corrections/upgrades',
    'other'
  ];
  for (let i = 0; i < names.length; i++ ) {
    await knex('categories').insert({
      id: i + 1,
      name: names[i]
    });
  };
};
