const express=require('express');
const router=express.Router();

const {createComment}=require('../controller/comments-controller')

router.post('/createcomment',createComment)

module.exports.commmentRoute=router;