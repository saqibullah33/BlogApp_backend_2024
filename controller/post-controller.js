const postRepository=require('../repository/post-repositry')
const HttpStatus=require('../utils/statuscode')
const createResponseMessage=require('../utils/responseMessages')



const createpost=async(req,res)=>{
    try{
        const post=await postRepository.createPost(req.body)
        if(!post){
            res.status(HttpStatus.BAD_REQUEST).json(createResponseMessage('error','Error creating post',null))
        }
        res.status(HttpStatus.CREATED).json(createResponseMessage('success','Post created successfully',post))
    }catch(error){
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponseMessage('error','Error creating post',error.message))
    }
}

const getallpost=async(req,res)=>{
    try{
        const post=await postRepository.getAllPost()
        if(!post){
            res.status(HttpStatus.BAD_REQUEST).json(createResponseMessage('error','Error getting post',null))
        }
        res.status(HttpStatus.CREATED).json(createResponseMessage('success','',post))
    }catch(error){
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponseMessage('error','Error getting post',error.message))
    }
}


module.exports={
    createpost,
    getallpost
}