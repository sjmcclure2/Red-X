const express = require('express');
const knex = require('knex')(require('./../knexfile.js')[process.env.NODE_ENV]);

const router = express.Router();

router.get('/', (req, res) => { 
  knex('users')
    .select('id', 'username')
    .limit(req.query.limit ?? 20)
    .offset(req.query.offset ?? 0)
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isInteger(id) && id > 0 && id < 2 ** 31) {
    knex('users')
      .where('id', id)
      .select('id', 'username')
      .then(data => res.json(data))
      .catch(err => console.error(err));
  } else {
    res.status(400).end("Invalid ID");
  }
});

module.exports = router;
