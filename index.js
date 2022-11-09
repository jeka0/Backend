const express = require('express')
const router = require("./routes/router.js")
const bodyParser = require('body-parser')
const dbAccess = require("./databaseAccess/dbAccess.js")
const AppDataSource = dbAccess.AppDataSource;
const app = express()
const PORT = 3000;
app.use(bodyParser.json())
app.use('/api',router)

AppDataSource.initialize().then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT,()=>console.log(`The server is running on a port ${PORT}...`));
}).catch((err)=>console.log("Database connection error (" + err + ")"));