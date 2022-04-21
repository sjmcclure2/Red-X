const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = {
  development: 8080,
  production: 443
}[process.env.NODE_ENV];
const HOST = {
  development: 'http://localhost',
  production: 'https://red-x-server.herokuapp.com'
}[process.env.NODE_ENV];
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

app.listen(process.env.PORT || PORT, () => {
  console.log(`API server running at ${BASE_URL}`)
});
