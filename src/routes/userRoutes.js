const router = require('express').Router();
const {getCurrentUser, getUser, updateUser, deleteUser} = require('../controllers/userController.js');

router.get('/:id', getUser);
router.get('/',  getCurrentUser);
router.put('/',  updateUser);
router.delete('/',  deleteUser);


module.exports = router;