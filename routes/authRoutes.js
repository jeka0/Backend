const router = require('express').Router();

const {login,refresh,register} = require('../Controllers/AuthController.js')
router.post('/login',(req,res)=>{login(req,res);});
router.post('/register',(req,res)=>{register(req,res);});
router.post('/refresh',(req,res)=>{refresh(req,res);});

module.exports = router;