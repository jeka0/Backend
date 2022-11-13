const jwt = require("../helpers/jwt");
const userAccess = require("../repositories/userAccess");

const accessTokenSecret = process.env.JWT_ACCESS_KEY;
const refreshTokenSecret = process.env.JWT_REFRESH_KEY;

async function login(data){
    let user = await userAccess.getOneUserByEmail(data.email);

    if(!user || user.password !== data.password)
    throw new Error("Invalid email or password");

    const accessToken = jwt.createToken({ id: user.id }, accessTokenSecret);
    const refreshToken = jwt.createToken({ id: user.id }, refreshTokenSecret);

    return { accessToken, refreshToken };
}

async function register(data){
    let user = await userAccess.getOneUserByEmail(data.email);
    
    if(user)
    throw new Error("This email is already in use by another account");

    data.firstName = data.firstName ?? "";
    data.lastName = data.lastName ?? "";
    
    await userAccess.createUser(data);
}

async function refresh(data)
{
    try{
        let result =  jwt.verifyToken(data.refreshToken, refreshTokenSecret);

        if(!result)
        throw new Error("RefreshToken is not valid");
        
        const accessToken = jwt.createToken({ id: result.id }, accessTokenSecret);
        return {accessToken};
    }catch{ throw new Error("RefreshToken is not valid"); }
}

module.exports={
    login,
    register,
    refresh
}