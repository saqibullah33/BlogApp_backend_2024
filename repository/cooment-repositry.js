const Post = require('../model/postmodel');
const Comment = require('../model/commentsmodel');



class CommenyRepository  {
    async createComment(postId,user,commentMessage) {
        try {
            const comment = new Comment({
                user,
                comment:commentMessage,
                post:postId
            });
            await comment.save();
            const post = await Post.findById(postId);
            post.comments.push(comment._id);
            await post.save();
            return comment;
        } catch (error) {
            throw error;
        }
    }

    async getAllComment(postId) {
        try {
            const comments = await Comment.find({postId:postId});
            return comments;
        } catch (error) {
            throw error;
        }
    }

    async DeleteComment(commentId) {
        try {
            const comment = await Comment.findById(commentId);
            const postid=comment.postId;
            const post = await Post.findById(postid);
            post.comments.pull(commentId);
            await post.save();
            await comment.remove();
            return comment;
        } catch (error) {
            throw error;
        }

    }
}

const commentRepository = new CommenyRepository();
module.exports = commentRepository;
