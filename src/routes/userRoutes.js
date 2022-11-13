const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth.js')
const {getCurrentUser, getUser, updateUser, deleteUser} = require('../controllers/userController.js');

router.get('/:id', getUser);
router.get('/', checkAuth.checkAuth, getCurrentUser);
router.put('/', checkAuth.checkAuth, updateUser);
router.delete('/', checkAuth.checkAuth, deleteUser);


module.exports = router;