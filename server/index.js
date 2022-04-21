const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

<<<<<<< HEAD
const PORT = 8080;
const HOST = 'http://localhost';
const BASE_URL = `${HOST}:${PORT}/api`;
=======
const PORT = 4000;
const HOST = 'https://red-x-server.herokuapp.com';
const BASE_URL = `http://${HOST}:${PORT}/api`;
>>>>>>> 42cc8e3bedbf61c0d7a55f2fa56d7b4665193b48
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
  console.log(`API server running at port ${PORT}`)
});
