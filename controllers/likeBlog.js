const { response } = require('express');
const Like = require("../models/likes.model.js");
const Blog = require("../models/blog.model.js");

exports.likeBlog = async (req, res) => {
    try {
        //fetch data form Like model
        const { blog, likedBy } = req.body;

        //create a Like obj

        const LikeObj  = new Like({
           blog,likedBy
        });

        //save the Like
        const LikeSave = await LikeObj.save();

        //find post by id
        const updateBlog = await Blog.findByIdAndUpdate(blog, 
            {$push : {like: LikeSave._id}},{new:true}).populate("like").exec();


        res.json({
            // success: true,
            blog:updateBlog,
         
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error(Like)",
            message: err.message,
        });
    }
};


//! Delete like

exports.unlikeBlog = async (req, res) => {
    try {
        //fetch data form Like model
        const { blog, likedBy } = req.body;

        
        const deleteLike = await Like.findOneAndDelete({blog:blog,_id:likedBy});

        const updateBlog = await Blog.findByIdAndUpdate(blog, 
            {$pull : {like: deleteLike._id}},{new:true}).populate("like").exec();


        res.json({
            // success: true,
            blog:updateBlog,
         
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error(unLike)",
            message: err.message,
        });
    }
};
