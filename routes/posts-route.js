const express=require('express');
const router=express.Router();

const {createpost,getallpost} =require('../controller/post-controller')

router.post('/createpost',createpost).
get('/posts',getallpost)

module.exports=router;