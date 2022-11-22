const jwt = require("../helpers/jwt");
const userService = require("./userService");
const { compare } = require("../helpers/encrypt"); 

const accessTokenSecret = process.env.JWT_ACCESS_KEY;
const refreshTokenSecret = process.env.JWT_REFRESH_KEY;

async function login(data){
    const user = await userService.getUserByEmail(data.email);

    if(!user || !await compare(data.password, user.password)){   
        throw new Error("Invalid email or password");
    }

    const accessToken = jwt.createToken({ id: user.id }, accessTokenSecret);
    const refreshToken = jwt.createToken({ id: user.id }, refreshTokenSecret);

    return { accessToken, refreshToken };
}

async function register(data){
    const user = await userService.getUserByEmail(data.email);
    
    if(user){
        throw new Error("This email is already in use by another account");
    }
    
    await userService.createUser(data);
}

async function refresh(data)
{
    try{
        const result =  jwt.verifyToken(data.refreshToken, refreshTokenSecret);

        if(!result){
            throw new Error("RefreshToken is not valid");
        }
        
        const accessToken = jwt.createToken({ id: result.id }, accessTokenSecret);
        const refreshToken = jwt.createToken({ id: result.id }, refreshTokenSecret);

        return { accessToken, refreshToken };
    }catch{ throw new Error("RefreshToken is not valid"); }
}

module.exports={
    login,
    register,
    refresh
}