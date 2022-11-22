
const userService = require("../services/userService");
require('dotenv').config()

async function deleteUser(req, res){
    const userId = req.userId;

    userService.deleteCurrentUser(userId)
    .then(()=>res.send("OK"))
    .catch((err)=>res.status(401).send(err.message));
}

async function updateUser(req, res){
    try{
        const { email, password, firstName, lastName } = req.body;
        const userId = req.userId;

        if(!email && !password && !firstName && !lastName){
            throw new Error("No data");
        }

        await userService.updateCurrentUser(userId, {email, password, firstName, lastName});

        res.send("OK");
    }catch(e){res.status(401).send(err.message);}
}

async function getUser(req, res){
    const { id } = req.params;

    userService.getUserByID(id)
    .then((user)=>{
        const { password, ...userData } = user;

        res.send(userData);
    }).catch((err)=>res.status(401).send(err.message));
}

async function getCurrentUser(req, res){
    const userId = req.userId;
    userService.getUserByID(userId)
    .then((user)=>{
        const { password, ...userData } = user;

        res.send(userData);
    }).catch((err)=>res.status(401).send(err.message));
}

module.exports = {
    getCurrentUser,
    getUser,
    updateUser,
    deleteUser
};