const express = require('express')
const app = express()
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('This is GET reqest')
})

app.post('/', function (req, res) {
  res.send('This is POST reqest')
})

app.delete('/', function (req, res) {
  res.send('This is DELETE reqest')
})

app.put('/', function (req, res) {
  res.send('This is PUT reqest')
})

app.listen(PORT,()=>console.log(`The server is running on a port ${PORT}...`))