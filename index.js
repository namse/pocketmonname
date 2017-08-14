const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('hi!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server listen ${port}`));
