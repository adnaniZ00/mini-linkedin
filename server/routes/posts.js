const express = require("express");
const auth = require("../middleware/auth");
const Post = require("../models/Post");
const router = express.Router();

// Create a new post
router.post("/", auth, async (req, res) => {
  try {
    const newPost = new Post({
      content: req.body.content,
      author: req.user.id,
    });
    const post = await newPost.save();
    const populatedPost = await post.populate("author", ["name"]);
    res.json(populatedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get all posts for the home feed
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", ["name"])
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get all posts by a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId })
      .populate("author", ["name"])
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
