const router = require('express').Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const checkAuth = require('../middlewares/checkAuth.js');
const {celebrate} = require('celebrate');
const userSchem = require("../validation/userSchems");

router.use('/auth', authRoutes);
router.use('/user', celebrate(userSchem.AccessTokenExists), checkAuth, userRoutes);
router.use('/post', celebrate(userSchem.AccessTokenExists), checkAuth, postRoutes);
module.exports = router;