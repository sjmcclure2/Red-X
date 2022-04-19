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
  console.log(req.body);
  knex('requests')
    .insert(req.body)
    .returning('id')
    .then(id => res.redirect(201, `/requests/${id}`));
})


// {
//   title: 'TCMax keeps failing',
//   description: 'its broken, fix it',
//   category_id: '2',
//   priority: '1'
// }

module.exports = router;
