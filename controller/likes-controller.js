const likesRepositry = require('../repository/likes-repositry');
const HttpStatus = require('../utils/statuscode');
const createResponseMessage = require('../utils/responseMessages');


const createLike = async (req, res) => {
    try {
        const { postId, user } = req.body;
        const like = await likesRepositry.createLike(postId, user);
        if (!like) {
            return res.status(HttpStatus.BAD_REQUEST).send(createResponseMessage('error', 'Error creating like', ''));
        }
        res.status(HttpStatus.CREATED).send(createResponseMessage('success', 'Like created successfully', like));
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(createResponseMessage('error', 'Error creating like', error));
    }

}

const deleteLike = async (req, res) => {
    try {
        const likeId = req.params.id;
        console.log(likeId);
        const like = await likesRepositry.DeleteLike(likeId);
        if (!like) {
            return res.status(HttpStatus.BAD_REQUEST).send(createResponseMessage('error', 'Error deleting like', ''));
        }
        res.status(HttpStatus.CREATED).send(createResponseMessage('success', 'Like deleted successfully', like));
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(createResponseMessage('error', 'Error deleting like', error));
    }
}

module.exports={
    createLike,
    deleteLike
}