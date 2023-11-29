require('dotenv').config();
const app = require('express')();
const port = process.env.port || 8080;
const env = process.env.NODE_ENV;

app.get('/', (req, res) => {
  res.send(`Server is up, this is a class demo in ${env}.`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});