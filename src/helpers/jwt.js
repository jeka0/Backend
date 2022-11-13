const jwt = require("jsonwebtoken")

const createToken=(data,salt)=>
{
    return jwt.sign({...data}, salt);
};

const verifyToken=(token, salt)=>
{
    return jwt.verify(token, salt);
};

module.exports = {
    createToken,
    verifyToken
}