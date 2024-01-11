const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
     
    blog:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"blogData"
    },
    
    commentBody:
    {
        type:String,
        maxLength:100,
    },

    commentedBy:
    {
        type:String,
        maxLength:20,
        require:true,
        default:"Anonymous"
    }
})

module.exports = mongoose.model("commentData", commentSchema)
