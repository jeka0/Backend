const jwt = require('../helpers/jwt.js');
require('dotenv').config();

const accessTokenSecret = process.env.JWT_ACCESS_KEY;

const checkAuth = (req, res, next) => {
    try {
        const { accessToken } = req.body;
        const decoded = jwt.verifyToken(accessToken, accessTokenSecret);
        req.body.userId = decoded.id;

        next();
    } catch (err) {
        res.status(401).send(err);
    }
}

module.exports = { 
    checkAuth
}