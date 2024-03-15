const Post = require('../model/postmodel');
const Like = require('../model/likesmodel');


class LikesRepositry{
    async createLike(postId,user){
        try{
            const like=new Like({
                post:postId,
                user:user
            });
            await like.save();
            const post=await Post.findById(postId);
            post.Likes.push(like._id);
            await post.save();
            return like;
        }catch(error){
            throw error;
        }
    }

    async getAllLike(postId){
        try{
            const likes=await Like.find({postId:postId});
            return likes;
        }catch(error){
            throw error;
        }
    }

    async DeleteLike(likeId){
        try {
            const like = await Like.findById(likeId);
            if (!like) {
                throw new Error('Like not found');
            }
    
            const post = await Post.findById(like.post);
            if (!post) {
                throw new Error('Post not found');
            }
    
            const dislike = await Like.findByIdAndDelete(likeId);
    
            // Update the post document by pulling the like
            post.Likes.pull(likeId);
            await post.save();
    
            return dislike;
        } catch (error) {
            throw error;
        }
    }
}

const likesRepositry=new LikesRepositry();
module.exports=likesRepositry;