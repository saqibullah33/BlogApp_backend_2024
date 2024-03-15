const commentRepository = require('../repository/cooment-repositry');
const Post = require('../model/postmodel');
const Httpstatus = require('../utils/statuscode');
const createResponseMessage = require('../utils/responseMessages');


const createComment = async (req, res) => {
    try {
        const { postId, user, commentMessage } = req.body;
        const comment = await commentRepository.createComment(postId, user, commentMessage);
        if(!comment){
            return res.status(Httpstatus.BAD_REQUEST).send(createResponseMessage('error','Error creating comment', ''));
        }
        res.status(Httpstatus.CREATED).send(createResponseMessage('success','Comment created successfully', comment));
    } catch (error) {
        res.status(Httpstatus.INTERNAL_SERVER_ERROR).send(createResponseMessage('error','Error creating comment', error));
    }
}

module.exports = {
    createComment
}