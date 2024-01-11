// const { response } = require('express');
const Blog = require("../models/blog.model.js");

exports.getBlog = async (req, res) => {
    try {

        const Blogs = await Blog.find({});

        res.status(200).json({
            success: true,
            data: Blogs,
            message: "Entry Blog data is fetched (GET) Successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error(GET)",
            message: err.message,
        });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        const Blogs = await Blog.findById({ _id: id })


        if (!Blogs) {
            return res.status(404).json({
                success: false,
                message: "No Data Found with Given ld",
            })
        }

        //data for given id FOUND
        res.status(200).json({
            success: true,
            data: Blogs,
            message: `Blog ${id} data successfully fetched`,
        })

    }

    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error(GETby ID)",
            message: err.message,
        });

    }
}