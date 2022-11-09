const jwt = require('jsonwebtoken')
const userAccess = require("../databaseAccess/userAccess.js")
require('dotenv').config()
const accessTokenSecret = process.env.JWT_ACCESS_KEY;
const refreshTokenSecret = process.env.JWT_REFRESH_KEY;

async function login(req, res){
    const { email, password } = req.body;
    if(!email || !password)
    res.status(400).send("Email and password required");
    // получение пользователя
    let user = await userAccess.getOneUser({ email, password });
    const accessToken = jwt.sign({},accessTokenSecret)
    const refreshToken = jwt.sign({},refreshTokenSecret)
    res.send({ accessToken, refreshToken, user })
}

function register(req, res){
    const { email, password, firstName, lastName } = req.body;
    if(!email || !password)
    res.status(400).send("Email and password required");
    userAccess.createUser({ email, password, firstName, lastName })
    res.send({ email, password, firstName, lastName })
}

function refresh(req, res){
    try{

    }catch(e){res.status(500).json(e);}
}


module.exports = {
    login,refresh,register,
};