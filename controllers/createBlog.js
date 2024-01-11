const { response } = require('express');
const Blog = require("../models/blog.model.js");

exports.createBlog = async (req, res) => {
    try {
        const { title, description,createdBy } = req.body;

        console.log('Request Body:', req.body);

        const createdBlog = await Blog.create({ title, description,createdBy });

        console.log('Created Blog:', createdBlog);

        res.status(200).json({
            success: true,
            data: createdBlog,
            message: "Entry Created Successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};
