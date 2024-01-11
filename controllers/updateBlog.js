const { response } = require('express');
const Blog = require("../models/blog.model.js");

exports.updateBlog = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, description,createdBy } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
            { _id: id },
            { title, description, createdBy,updatedAt: Date.now() }
        );


        res.status(200).json({
            success: true,
            data: updatedBlog,
            message: `Entry updated of id : ${id} Successfully(updateBlog)`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error (updateBlog)",
            message: err.message,
        });
    }
};
