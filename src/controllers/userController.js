
const userService = require("../services/userService");
require('dotenv').config()

async function deleteUser(req, res){
    const userId = req.userId;

    userService.deleteCurrentUser(userId)
    .then(()=>res.send("OK"))
    .catch((err)=>res.status(401).send('Access denied'));
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
    }catch(e){res.status(401).send('Access denied');}
}

async function getUser(req, res){
    try{
        const { id } = req.params;

        let user  = await userService.getUserByID(id)
        const { password, ...userData } = user;

        res.send(userData);
    }catch(e){res.status(404).send('User not found');}
}

async function getCurrentUser(req, res){
    try{
        const userId = req.userId;
        let user  = await userService.getUserByID(userId);

        const { password, ...userData } = user;

        res.send(userData);
    }catch(e){res.status(401).send('Access denied');}
}

module.exports = {
    getCurrentUser,
    getUser,
    updateUser,
    deleteUser
};