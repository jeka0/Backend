const express = require('express')
const router = require("./routes/router.js")
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000;
app.use(bodyParser.json())
app.use('/api',router)

app.listen(PORT,()=>console.log(`The server is running on a port ${PORT}...`))