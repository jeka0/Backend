const jwt = require("../helpers/jwt");
const userService = require("./userService");

const accessTokenSecret = process.env.JWT_ACCESS_KEY;
const refreshTokenSecret = process.env.JWT_REFRESH_KEY;

async function login(data){
    let user = await userService.getOneUserByEmail(data.email);

    if(!user || user.password !== data.password){   
        console.log(`"${user.password}" "${data.password}" "${user.password === data.password}"`);
        throw new Error("Invalid email or password");
    }

    const accessToken = jwt.createToken({ id: user.id }, accessTokenSecret);
    const refreshToken = jwt.createToken({ id: user.id }, refreshTokenSecret);

    return { accessToken, refreshToken };
}

async function register(data){
    let user = await userService.getOneUserByEmail(data.email);
    
    if(user)
    throw new Error("This email is already in use by another account");
    
    await userService.createUser(data);
}

async function refresh(data)
{
    try{
        let result =  jwt.verifyToken(data.refreshToken, refreshTokenSecret);

        if(!result)
        throw new Error("RefreshToken is not valid");
        
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