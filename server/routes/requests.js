const express = require('express');
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV]);

const router = express.Router();

router.get('/', (req, res) => { 
  knex('requests')
    // .where('description', '<>', '')
    .limit(req.query.limit ?? 20)
    .offset(req.query.offset ?? 0)
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isInteger(id) && id > 0 && id < 2 ** 31) {
    knex('requests')
      .where('id', id)
      .then(data => res.json(data))
      .catch(err => console.error(err));
  } else {
    res.status(400).end("Invalid ID");
  }
});

router.post('/', (req, res) => {
  knex('requests')
    .insert({
      ...req.body,
      is_resolved: false
    })
    .returning('id')
    .then(([ { id } ]) => {
      console.log('Created new request', id);
      res.redirect(`${req.get('referrer')}requests/${id}`);
    })
    .catch(err => console.error(err));
})

module.exports = router;
