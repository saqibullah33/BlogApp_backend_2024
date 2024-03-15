const mongoose = require('mongoose');

const likesSchema = new mongoose.Schema({
    user: {
        type:String,
        required:true
    },

    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
});

const Like = mongoose.model('Like', likesSchema);
module.exports = Like;