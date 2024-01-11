const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true,
            maxLength: 50,
        },

        description:
        {
            type: String,
            required: true,
            maxLength: 50,
        },

        createdBy:
        {
            type: String,
            required: true,
            maxLength: 20,
            default: "Anonymous"
        },

        createdAt:
        {
            type: Date,
            required: true,
            default: Date.now(),
        },
        
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },

        like:
        [{
            type:mongoose.Schema.Types.ObjectId,
            ref:"likeData",
       
        }],
    
        comment:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "commentData",
            default:"no comments"
        }],
    


    }, { timestamps: true }

)

module.exports = mongoose.model("blogData", blogSchema)