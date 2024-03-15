const express=require('express');
const router=express.Router();
const {createLike,deleteLike}=require('../controller/likes-controller')

router.post('/createLike', createLike)
.delete('/deleteLike/:id', deleteLike);

module.exports.likeRoute=router;