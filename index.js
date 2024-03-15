const express=require('express');
const app=express();
const dbConnect=require('./dbconfig/dbconnect');
const router=require('./routes/posts-route');
const {commmentRoute}=require('./routes/comments-route')
const {likeRoute}=require('./routes/Likes-route')
require('dotenv').config();
app.use(express.json());
dbConnect();

app.use('/api/v1',router);
app.use('/api/v1',commmentRoute);
app.use('/api/v1',likeRoute);
app.get('/',(req,res)=>{
    res.send('Hello World');
});







app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
}
);
