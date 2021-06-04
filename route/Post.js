const express = require("express");
const router = express.Router();

// these are the controllers
// we will create yall of them in the future
const {
  getPostById,
  createPost,
  getPost,
  updatePost,
} = require("../controller/Post");

//params
// it will fetch the value from the Id
router.param("postEmail", getPostById);



// to get a single Post
router.get("/post/:postEmail/", getPost);

// to create a Post
router.post("/post/create/", createPost);

// to update the post
router.put("/post/:postEmail/update", updatePost);



// we will export the router to import it in the index.js
module.exports = router;