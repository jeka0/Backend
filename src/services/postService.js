const postAccess = require("../repositories/postAccess");

async function createPost(data){
    data.datetime = new Date();

    const post = await postAccess.createPost(data)

    if(!post){
        throw new Error("Error creating post");
    }

    return post;
}

async function getPost(id){
    const post = await postAccess.getPost(id);

    if(!post){
        throw new Error("Post not found");
    }

    return post;
}

async function getAllPosts()
{
    return await postAccess.getAllPosts();
}

async function getUserPosts(id){
    return await postAccess.getUserPosts(id);
}

async function updatePost(id, userId, data){
    const post = await postAccess.getPost(id);

    if(post.userId !== userId){
        throw new Error("Access denied");
    }

    const updatedPost = await postAccess.updatePost(id, data);

    if(!updatedPost){
        throw new Error("Error updating post");
    }

    return updatedPost;
}

async function deletePost(id, userId){
    const post = await postAccess.getPost(id);

    if(post.userId !== userId){
        throw new Error("Access denied");
    }

    const deletedPost = await postAccess.deletePost(id);

    if(!deletedPost){
        throw new Error("Error deleting post");
    }

    return deletedPost;
}

module.exports = {
    createPost, 
    getPost, 
    getAllPosts, 
    getUserPosts, 
    updatePost, 
    deletePost
};