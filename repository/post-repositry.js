const Post = require('../model/postmodel');


class PostRepository {

    async createPost({ title, body }) {
        try {
            const post = new Post({
                title: title,
                body: body
            });
            await post.save();
            return post;
        } catch (error) {
            throw error;
        }
    }

    async getAllPost() {
        try {
            const posts = await Post.find().populate('comments').populate('Likes').exec();
            console.log(posts);
            return posts;
        } catch (error) {
            throw error;
        }
    }

    async getPostById(id) {
        try {
            const post = await Post.findById(id);
            return post;
        } catch (error) {
            throw error;
        }
    }

    async updatePost(id, title, body) {
        try {
            const post = await Post.findById(id);
            post.title = title;
            post.body = body;
            await post.save();
            return post;
        } catch (error) {
            throw error;
        }
    }

    async deletePost(id) {
        try {
            const post = await Post.findById(id);
            await post.remove();
            return post;
        } catch (error) {
            throw error;
        }
    }
}

const postRepository = new PostRepository();
module.exports = postRepository;