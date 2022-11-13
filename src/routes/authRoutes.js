const router = require('express').Router();
const auth = require('../middlewares/checkAuth.js')

const {login,refresh,register} = require('../controllers/authController.js')
router.post('/login', login);
router.post('/register', register);
router.post('/refresh', refresh);

module.exports = router;