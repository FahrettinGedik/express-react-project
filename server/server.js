// Server and Backend API
const express = require('express')

const app = express()

app.get("/api", (req, res) => {
  res.json({"users": ["John", "Bob", "Mary", "Jane", "Kate"]})
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
})