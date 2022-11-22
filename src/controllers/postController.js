const postSevice = require("../services/postService");

async function createPost(req, res){
    const { message } = req.body;
    const userId = req.userId;

    postSevice.createPost({ userId, message })
    .then(()=>res.send("OK"))
    .catch((err)=>res.status(400).send(err.message));
}

async function getPost(req, res){
    const { id } = req.params;

    postSevice.getPost(id)
    .then((post)=>res.send(post))
    .catch((err)=>res.status(400).send(err.message));
}

async function getAllPosts(req, res){
    postSevice.getAllPosts()
    .then((posts)=>res.send(posts))
    .catch((err)=>res.status(400).send(err.message));
}

async function getCurrentUserPosts(req, res){
    const userId = req.userId;

    postSevice.getUserPosts(userId)
    .then((posts)=>res.send(posts))
    .catch((err)=>res.status(400).send(err.message));
}

async function getUserPosts(req, res){
    const { id } = req.params;

    postSevice.getUserPosts(id)
    .then((posts)=>res.send(posts))
    .catch((err)=>res.status(400).send(err.message));
}

async function updatePost(req, res){
    const { id } = req.params;
    const { message } = req.body;
    const userId = req.userId;

    postSevice.updatePost(id, userId, { message })
    .then(()=>res.send("OK"))
    .catch((err)=>res.status(400).send(err.message));
}

async function deletePost(req, res){
    const { id } = req.params;
    const userId = req.userId;

    postSevice.deletePost(id, userId)
    .then(()=>res.send("OK"))
    .catch((err)=>res.status(400).send(err.message));
}

module.exports = { 
    createPost, 
    getPost, 
    getAllPosts, 
    getCurrentUserPosts, 
    getUserPosts, 
    updatePost, 
    deletePost 
};