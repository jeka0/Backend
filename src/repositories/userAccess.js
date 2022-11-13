const dbAccess = require("./dbAccess.js")
const userRep = dbAccess.AppDataSource.getRepository("User");

async function createUser(user){
   await userRep.save(user)
}

async function getAll(){
    return await userRep.find()
}

async function getOneUserByID(id){
    return await userRep.findOneBy({ id })
}

async function getOneUserByEmail(email){
    return await userRep.findOneBy({ email })
}

async function deleteUser(id){
    await userRep.delete({ id });
}

async function updateUser(id, data){
    await userRep.update({ id }, data)
}

module.exports = {
    createUser,
    getOneUserByID,
    getOneUserByEmail,
    getAll,
    deleteUser,
    updateUser
};