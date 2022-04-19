const express = require('express');
const knex = require('knex')(require('./../knexfile.js')[process.env.NODE_ENV]);

const { BASE_URL } = require('../index')

const getTable = require('./getTable');
const usersPublic = require('./usersPublic')
const requests = require('./requests')
const router = express.Router();

const tables = {};

[ 'categories',
  'project_owners',
  'projects',
  'requests',
  'users'
].forEach(el => {
  tables[el] = `${BASE_URL}/${el}`
});

router.get('/', (req, res) => {
  res.json(tables);
});

router.use([ '/categories', '/project_owners', '/projects' ], getTable);
router.use('/requests', requests);
router.use('/users', usersPublic);

module.exports = router;
