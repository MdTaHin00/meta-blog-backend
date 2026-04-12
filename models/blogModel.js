const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
     title:{
        type:String,
        required:[true,"title is required"]
     },
    description:String,
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    author:{
        name:String,
        image:String
    },
    createAt:{
        type:Date,
        default:Date.now
    }

})

//!  create model collection name
//* "blogSchema" -> model collection name 
//* blogSchema -> operal const var
const Blog = mongoose.model('blogSchema', blogSchema)

//! export 
module.exports = Blog ;