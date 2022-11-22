const dbAccess = require("./dbAccess.js")
const postRep = dbAccess.AppDataSource.getRepository("Post");

async function createPost(post){
   return await postRep.save(post)
}

async function getAllPosts(){
    return await postRep.find()
}

async function getPost(id){
    return await postRep.findOneBy({ id })
}

async function getUserPosts(userId){
    return await postRep.findBy({userId});
}

async function deletePost(id){
    return await postRep.delete({ id });
}

async function updatePost(id, data){
    return await postRep.update({ id }, data)
}

module.exports = {
    createPost, 
    getPost, 
    getAllPosts, 
    getUserPosts, 
    updatePost, 
    deletePost
};