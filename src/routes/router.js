const router = require('express').Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes")
const checkAuth = require('../middlewares/checkAuth.js')
const {celebrate} = require('celebrate');
const userSchem = require("../validation/userSchems")

router.use('/auth', authRoutes)
router.use('/user', celebrate(userSchem.AccessTokenExists), checkAuth,userRoutes)
module.exports = router;