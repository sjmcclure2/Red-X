// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://postgres:docker@localhost:5432/red_x'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'd48mva4jd8v0gn',
      user: 'sjgxgkfelwdjou',
      password: 'bab58abbabc96fcc6c8a5b9886b261450112a2b27945374d9b0daf0a23819371',
      host: 'ec2-23-20-224-166.compute-1.amazonaws.com',
      port: '5432', 
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
