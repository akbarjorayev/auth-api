const express = require('express')
const app = express()

app.get('/auth', (req, res) => {
  res.send('Authentication endpoint')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
