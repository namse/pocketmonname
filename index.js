const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('hi!');
});

app.listen(8080, () => console.log('server listen 8080'));
