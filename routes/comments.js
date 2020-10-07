const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
// const Post = require("../models/Post");
// const Category = require("../models/Category");
const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment");

// to get all posts from database
router.get("/comments", (req, res) => {
  Comment.find()
    .populate("post", "_id title")
    .then((comments) => {
      res.json({ comments });
    })
    .catch((error) => {
      console.log(error);
    });
});

//submit the data
router.post("/new-comment", (req, res) => {
  const { body, post } = req.body;

  if (!body || !post) {
    res.json({ err: "All fields are required" });
  }

  Post.findOne({ _id: post.id })
    .then((post_found) => {
      const comment = new Comment({
        body,
        post: post_found,
      });

      comment
        .save()
        .then(() => {
          res.json({ msg: "Comment Created" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

//all comments paertaining to posts

router.get("/comments/posts/:postId", (req, res) => {
  Comment.find({ post: { _id: req.params.postId } })
    .populate("post", "_id title")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/comment-num", (req, res) => {
  Comment.count({})
    .then((comment) => {
      res.json({ comment });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
