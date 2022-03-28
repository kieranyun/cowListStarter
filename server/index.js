const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db = require('../database/mysql/index.js');
let query = require('../database/mysql/queryMethods.js');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.get('/api/cows', (req, res) => {
  query.getAll((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.send(results)
    }
  })
})

app.post('/api/cows', (req, res) => {
  query.insert(req.body.data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      query.getAll((err, results) => {
        if (err) {
          res.send(err)
        } else {
          res.send(results)
        }
      })
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
