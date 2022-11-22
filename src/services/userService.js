const userAccess = require("../repositories/userAccess");
const { getHesh } = require("../helpers/encrypt"); 

async function createUser(user){
    user.password = await getHesh(user.password);
    userAccess.createUser(user);
 }
 
 async function getAllUsers(){
    return await userAccess.getAllUsers();
 }
 
 async function getUserByID(id){
    const user = await userAccess.getUserByID(id);
    
    if(!user){
      throw new Error("User is not found");
    }

    return user;
 }
 
 async function getUserByEmail(email){
    return await userAccess.getUserByEmail(email);
 }
 
 async function deleteCurrentUser(id){
   const user = await userAccess.getUserByID(id);
    
    if(!user){
      throw new Error("User is not found");
    }

    userAccess.deleteUser(id);
 }
 
 async function updateCurrentUser(id, data){
   const user = await userAccess.getUserByID(id);
    
   if(!user){
     throw new Error("User is not found");
   }

   if(data.password)data.password = await getHesh(data.password);

   userAccess.updateUser(id, data);
 }
 
 module.exports = {
     createUser,
     getAllUsers,
     getUserByID,
     getUserByEmail,
     deleteCurrentUser,
     updateCurrentUser
 };

