const express = require('express');

const projects = require('./projects');
const requests = require('./requests');

const router = express.Router();

const tables = {};

[ 'categories',
'project_owners',
'projects',
'requests',
'requests_projects_join',
'users',
'users_projects_join'
].sort().forEach(el => {
  tables[el] = `http://localhost:8080/api/${el}`
});

router.get('/', (req, res) => {
  res.json(tables);
});

router.use('/projects', projects);

router.use('/requests', requests);

module.exports = router;
