const { response } = require('express');
const Comment = require("../models/comment.model.js");
const Blog = require("../models/blog.model.js");

exports.createComment = async (req, res) => {
    try {
        //fetch data form comment model
        const { blog, commentBody,commentedBy } = req.body;

        //create a comment obj

        const commentObj  = new Comment({
           blog,commentBody,commentedBy
        });

        //save the comment
        const commentSave = await commentObj.save();

        //find post by id
        const updateBlog = await Blog.findByIdAndUpdate(blog, 
            {$push : {comment: commentSave._id}},{new:true}).populate("comment").exec();


        res.json({
            // success: true,
            blog:updateBlog,
         
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error(comment)",
            message: err.message,
        });
    }
};
