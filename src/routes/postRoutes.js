const router = require('express').Router();
const {celebrate} = require('celebrate');
const postSchems = require("../validation/postSchems")

const {createPost, getPost, getAllPosts, getCurrentUserPosts, getUserPosts, updatePost, deletePost} = require('../controllers/postController');

router.post('/', celebrate(postSchems.create), createPost);
router.get('/all', getAllPosts);
router.get('/:id', celebrate(postSchems.id), getPost);
router.get('/', getCurrentUserPosts);
router.get('/user/:id', celebrate(postSchems.id), getUserPosts);
router.put('/:id', celebrate(postSchems.id), celebrate(postSchems.update), updatePost);
router.delete('/:id',  celebrate(postSchems.id), deletePost);

module.exports = router;