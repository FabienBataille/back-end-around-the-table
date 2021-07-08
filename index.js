const express = require('express');
const app = express();
require('dotenv').config();
const pool = require('./config/mysql');
const port = 8000;
var cors = require('cors');
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/questions/:name', function (request, response) {
  pool.query(
    'SELECT * from question join techno on question.techno_id = techno.id where techno.name = ?',
    request.params.name,
    (error, results) => {
      console.log(results);
      response.send(results);
    }
  );
});

app.get('/questions/:id', function (request, response) {
  pool.query();
});

app.get('/', function (request, response) {
  response.send('Hello World');
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
