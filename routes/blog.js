const express = require('express');
const router = express.Router();

// import controller
const {createBlog} = require("../controllers/createBlog");
const {getBlog,getBlogById} = require("../controllers/getBlog");
const {updateBlog} = require("../controllers/updateBlog");
const {deleteBlog} = require("../controllers/deleteBlog");
const {createComment} = require("../controllers/createComment");
const {likeBlog,unlikeBlog} = require("../controllers/likeBlog");



router.post("/createBlog",createBlog);
router.get("/getBlog",getBlog);
router.get("/getBlog/:id",getBlogById);
router.put("/updateBlog/:id",updateBlog);
router.delete("/deleteBlog/:id",deleteBlog);

//for comments
router.post("/createComment",createComment);

//for like and unlike
router.post("/likeBlog",likeBlog);
router.post("/unlikeBlog",unlikeBlog);





module.exports = router; 