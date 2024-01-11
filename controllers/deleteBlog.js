const { response } = require('express');
const Blog = require("../models/blog.model.js");

exports.deleteBlog = async (req, res) => {
    try {

        const { id } = req.params;


        await Blog.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            // data: deleteBlog,
            message: `Entry deleted of id : ${id} Successfully(deleteBlog)`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error (deleteBlog)",
            message: err.message,
        });
    }
};
