const express = require('express')
const router = require("./routes/router.js")
const bodyParser = require('body-parser')
const typeorm = require("typeorm")
const app = express()
const PORT = 3000;
app.use(bodyParser.json())
app.use('/api',router)
const AppDataSource = new typeorm.DataSource({
    type : "postgres",
    host : "localhost",
    port : 5438,
    username : "admin",
    password : "root"
})
AppDataSource.initialize().then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT,()=>console.log(`The server is running on a port ${PORT}...`));
}).catch((err)=>console.log("Database connection error"));