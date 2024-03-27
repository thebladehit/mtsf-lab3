'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Hello there');
});

app.get('/bye', (req, res) => {
  res.end('bye');
});

app.listen(8080, () => {
  console.log('Listening on http://0.0.0.0:8080');
});