const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = 8080;

const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get("/api", (req, res) => {
  res.json({message: "Hello World"});
});

app.listen(PORT, () => {
  console.log(`Express app is listening on Port: ${PORT}`);
});