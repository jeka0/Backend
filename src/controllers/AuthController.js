const authService = require("../services/authService")

async function login(req, res){
    try{
        const { email, password } = req.body;

        res.send(await authService.login({ email, password }));
    }catch(e) {res.status(400).send(e.message);} 
}

async function register(req, res){
    try{
        const { email, password, firstName, lastName } = req.body;

        await authService.register({ email, password, firstName, lastName });

        res.send("OK");
    }catch(e) {res.status(400).send(e.message);} 
}

async function refresh(req, res){
    try{
        const { refreshToken } = req.body;

        res.send(await authService.refresh({ refreshToken }));
    }catch(e) {res.status(400).send(e.message);} 
}


module.exports = {
    login,
    refresh,
    register
};