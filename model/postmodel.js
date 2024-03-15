const mongoose = require('mongoose');
const Like = require('./likesmodel');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },  

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],

    Likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ]
    },

);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;