const express = require('express');;
const app = express();
const importData = require('./db.json');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chicago coffee api');
});

app.get('/cafes', (req, res) => {
  res.send(importData)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})