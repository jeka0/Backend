const dbAccess = require("./dbAccess.js")
const userRep = dbAccess.AppDataSource.getRepository("User");
async function createUser(user)
{
    let dbUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        user_password: user.password
    }
   await userRep.save(dbUser)
}
async function getAll()
{
    return await userRep.find()
}
async function getOneUser(user)
{
    return await userRep.findOneBy({
        email: user.email
    })
}

module.exports = {
    createUser,getOneUser,getAll
};