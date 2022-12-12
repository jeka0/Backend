const dbAccess = require("./dbAccess.js")
const postRep = dbAccess.AppDataSource.getRepository("Post");

async function createPost(post){
   return await postRep.save(post)
}

async function getAllPosts(){
    return await postRep.find({
         relations:['user'],
         order: {id: 'DESC'}
    });
}

async function getPost(id){
    return await postRep.findOne({
        where:{
            id 
        }, 
        relations:['user'] 
    });
}

async function getUserPosts(userId){
    return await postRep.find({
        where:{
            user:{
                id:userId
            }
        },
        relations:['user'],
        order: {id: 'DESC'}
    });
}

async function deletePost(id){
    return await postRep.delete({
        id
    });
}

async function updatePost(id, data){
    return await postRep.update({
        id
    }, data)
}

async function getRange(skip, take){
    const [result, total] = await postRep.findAndCount({ 
        skip,
        take,
        relations:['user'],
        order: {id: 'DESC'}
    });

    return {
        data: result,
        total
    }
}

async function getUserRange(userId, skip, take){
    const [result, total] = await postRep.findAndCount({ 
        skip,
        take,
        where:{
            user:{
                id:userId
            }
        },
        relations:['user'],
        order: {id: 'DESC'}
    });

    return {
        data: result,
        total
    }
}

module.exports = {
    createPost, 
    getPost, 
    getAllPosts, 
    getUserPosts, 
    updatePost, 
    deletePost,
    getRange,
    getUserRange
};