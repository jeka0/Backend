
const userService = require("../services/userService");
require('dotenv').config()

async function deleteUser(req, res){
    try{
        const { userId } = req.body;
        await userService.deleteCurrentUser(userId);

        res.send("OK");
    }catch(e){res.status(401).send('Access denied');}
}

async function updateUser(req, res){
    try{
        const { email, password, firstName, lastName, userId } = req.body;
        await userService.updateCurrentUser(userId, {email, password, firstName, lastName});

        res.send("OK");
    }catch(e){res.status(401).send('Access denied');}
}

async function getUser(req, res){
    try{
        const { id } = req.params;
        if(!id) 
        res.status(400).send("ID required");

        let user  = await userService.getOneUserByID(id)
        const { password, ...userData } = user;

        res.send(userData);
    }catch(e){res.status(404).send('User not found');}
}

async function getCurrentUser(req, res){
    try{
        const { userId } = req.body;
        let user  = await userService.getOneUserByID(userId);

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