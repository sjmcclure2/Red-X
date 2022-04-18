const express = require('express');
const knex = require('knex')(require('./../knexfile.js')[process.env.NODE_ENV]);

const { BASE_URL } = require('../index')

const getTable = require('./getTable');

const router = express.Router();

const tables = {};

[ 'categories',
  'project_owners',
  'projects',
  'requests'
].forEach(el => {
  tables[el] = `${BASE_URL}/${el}`
});

router.get('/', (req, res) => {
  res.json(tables);
});

router.use([ '/categories', '/project_owners', '/projects', '/requests' ], getTable);

module.exports = router;
