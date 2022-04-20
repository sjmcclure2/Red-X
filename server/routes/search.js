const express = require('express');
const knex = require('knex')(require('./../knexfile.js')[process.env.NODE_ENV]);

const router = express.Router();

router.get('/', (req, res) => {
  let query = req.query.query;
  if(!Number.isNaN(parseInt(query))) {
    query = parseInt(query)
  }
  const results = {};
  const promiseArray = [];
  promiseArray.push(
    knex('projects')
    // .where('id', query)
    .where('name', 'ILIKE', `%${query}%`)
    .orWhere('description', 'ILIKE', `%${query}%`)
    .orderBy('last_activity_at', 'desc')
    .then(data => results.projects = data)
    .catch(err => console.error(err))
  );
  promiseArray.push(
    knex('requests')
    // .where('id', query)
    .where('title', 'ILIKE', `%${query}%`)
    .orWhere('description', 'ILIKE', `%${query}%`)
    .orderBy('priority')
    .then(data => results.requests = data)
    .catch(err => console.error(err))
  );
  promiseArray.push(
    knex('users')
    .select('id', 'username')
    // .where('id', query)
    .where('username', 'ILIKE', `%${query}%`)
    .orderBy('username')
    .then(data => results.users = data)
    .catch(err => console.error(err))
  );
  Promise.all(promiseArray)
    .then(() => res.json(results))
    .catch(err => console.error(err));
});

module.exports = router;
