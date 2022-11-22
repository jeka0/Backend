const jwt = require('../helpers/jwt.js');
require('dotenv').config();

const accessTokenSecret = process.env.JWT_ACCESS_KEY;

const checkAuth = (req, res, next) => {
    try {
        const { accesstoken } = req.headers;
        const decoded = jwt.verifyToken(accesstoken, accessTokenSecret);
        req.userId = decoded.id;

        next();
    } catch (err) {
        res.status(401).send("AccessToken is not valid");
    }
}

module.exports = checkAuth;