const jwt = require('jsonwebtoken')
require('dotenv').config()
const accessTokenSecret = process.env.JWT_ACCESS_KEY;
const refreshTokenSecret = process.env.JWT_REFRESH_KEY;

function login(req, res){
    const { email, password } = req.body;
    if(!email || !password)
    res.status(400).send("Email and password required");
    // получение пользователя
    const accessToken = jwt.sign({},accessTokenSecret)
    const refreshToken = jwt.sign({},refreshTokenSecret)
    res.send({ accessToken, refreshToken })
}

function register(req, res){
    const { email, password, firstName, lastName } = req.body;
    if(!email || !password)
    res.status(400).send("Email and password required");

    res.send({ email, password, firstName, lastName })
}

function refresh(req, res){
    try{

    }catch(e){res.status(500).json(e);}
}

function GetAll(req, res){
    try{

    }catch(e){res.status(500).json(e);}
}

function GetOne(req, res){
    try{

    }catch(e){res.status(500).json(e);}
}

function Update(req, res){
    try{

    }catch(e){res.status(500).json(e);}
}


function Delete(req, res){
    try{

    }catch(e){res.status(500).json(e);}
}

module.exports = {
    login,refresh,register,
};