const typeorm = require("typeorm")
const AppDataSource = new typeorm.DataSource({
    type : "postgres",
    host : "localhost",
    port : 5438,
    username : "admin",
    password : "root",
    synchronize: true,
    entities: [require("../entity/User.js")],

})

module.exports = {
    AppDataSource
};