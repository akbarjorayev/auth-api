const express = require('express')
const cors = require('cors')
const app = express()

app.use(
  cors({
    origin: ['http://147.182.192.140'],
  })
)

app.get('/auth', (req, res) => {
  res.send('Authentication endpoint')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
