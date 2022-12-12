const router = require('express').Router();
const {celebrate} = require('celebrate');
const postSchems = require("../validation/postSchems")
const { upload } = require('../middlewares/image')

const {createPost, getPost, getAllPosts, getCurrentUserPosts, getUserPosts, updatePost, deletePost, getRange, getUserRange} = require('../controllers/postController');

router.post('/', upload.single("image"), celebrate(postSchems.create), createPost);
router.get('/all', getAllPosts);
router.get('/posts', celebrate(postSchems.pagination), getRange)
router.get('/posts/user/:id', celebrate(postSchems.pagination), celebrate(postSchems.id), getUserRange)
router.get('/:id', celebrate(postSchems.id), getPost);
router.get('/', getCurrentUserPosts);
router.get('/user/:id', celebrate(postSchems.id), getUserPosts);
router.put('/:id', upload.single("image"), celebrate(postSchems.id), celebrate(postSchems.update), updatePost);
router.delete('/:id',  celebrate(postSchems.id), deletePost);

module.exports = router;