const mongoose=require('mongoose');
require('dotenv').config();

const dbConnect=async()=>{
    try{
        const conn=await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
          
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports=dbConnect;