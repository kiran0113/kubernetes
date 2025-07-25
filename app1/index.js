const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from App 1!');
});

app.listen(port, () => {
  console.log(`App 1 listening at http://localhost:${port}`);
});

