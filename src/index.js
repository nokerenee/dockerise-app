const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Update to image, server is up and running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})