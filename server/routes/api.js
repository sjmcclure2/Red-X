const express = require('express');
const knex = require('knex')(require('./../knexfile.js')[process.env.NODE_ENV]);

const { BASE_URL } = require('../index')

const categories = require('./categories');
const project_owners = require('./project_owners');
const projects = require('./projects');
const requests = require('./requests');
const requests_projects_join = require('./requests_projects_join');
const users = require('./users');
const users_projects_join = require('./users_projects_join');

const router = express.Router();

const tables = {};

knex('pg_catalog.pg_tables')
.select('tablename')
.where({schemaname:'public'})
.where('tablename', 'NOT ILIKE', 'knex%')
.then(data =>
  data.map(el => el.tablename)
  .sort()
  .forEach(el => {
    tables[el] = `${BASE_URL}/${el}`
  })
);

router.get('/', (req, res) => {
  res.json(tables);
});

router.use('/categories', categories);
router.use('/project_owners', project_owners);
router.use('/projects', projects);
router.use('/requests', requests);
router.use('/requests_projects_join', requests_projects_join);
router.use('/users_projects_join', users_projects_join);
router.use('/users', users);

module.exports = router;
