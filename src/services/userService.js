const userAccess = require("../repositories/userAccess");

async function createUser(user){
    await userAccess.createUser(user);
 }
 
 async function getAll(){
    return await userAccess.getAll();
 }
 
 async function getOneUserByID(id){
    let user = await userAccess.getOneUserByID(id);
    
    if(!user)
    throw new Error("User is not found");

    return user;
 }
 
 async function getOneUserByEmail(email){
    let user = await userAccess.getOneUserByEmail(email);

    if(!user)
    throw new Error("User is not found");

    return user;
 }
 
 async function deleteCurrentUser(id){
    await userAccess.deleteUser(id);
 }
 
 async function updateCurrentUser(id, data){
    await userAccess.updateUser(id, data);
 }
 
 module.exports = {
     createUser,
     getOneUserByID,
     getOneUserByEmail,
     getAll,
     deleteCurrentUser,
     updateCurrentUser
 };

