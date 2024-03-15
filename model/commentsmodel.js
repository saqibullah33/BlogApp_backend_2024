const mongoose = require('mongoose');
const commentsSchema = new mongoose.Schema({
    user: {
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
});
const Comment = mongoose.model('Comment', commentsSchema);
module.exports = Comment;