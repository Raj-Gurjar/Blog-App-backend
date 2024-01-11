const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
    {
        blog:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"blogData"
        },

        likedBy:
        {
            type:String,
            require:true,
            default:"Anonymous"
        },
    }
)

module.exports = mongoose.model("likeData",likeSchema);