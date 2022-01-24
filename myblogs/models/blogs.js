const mongoose=require('mongoose')
const mongodb=require('mongodb')
const dburl='nodejs-shard-00-00.nbsqu.mongodb.net:27017'

mongoose.connect(dburl,{
    useNewUrlParser:true
})

const db=mongoose.connection
const Schema=mongoose.Schema

//create field
const blogSchema=new Schema({
    id:{
        type:Schema.ObjectId
    },
    title:{
        type:String,
        required:true
    },
    author:{
        tpye:String,
        required:true
    },
    category:{
        tpye:String,
        required:true
    }
})
const blogs=module.exports=mongoose.model("blogs",blogSchema)
//Update
// asas