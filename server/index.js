const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 8080;
const HOST = 'http://localhost';
const BASE_URL = `${HOST}:${PORT}/api`;
module.exports.BASE_URL = BASE_URL;

const api = require('./routes/api');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.all('/', (req, res) => {
  res.sendStatus(405);
});

app.use('/api', api);

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`API server running at ${BASE_URL}`)
});
