const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
// const Post = require("../models/Post");
// const Category = require("../models/Category");
const Post = mongoose.model("Post");
const Category = mongoose.model("Category");

// to get all posts from database
router.get("/posts", (req, res) => {
  Post.find()
    // .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/featured-posts", (req, res) => {
  Post.find({ isFeatured: true })
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/posts/:id", (req, res) => {
  Post.find({ _id: req.params.id })
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/posts/category/:catId", (req, res) => {
  Post.find({ category: { _id: req.params.catId } })
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/trending-posts", (req, res) => {
  Post.find()
    .sort({ numOfLikes: -1 })
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/fresh-stories", (req, res) => {
  Post.find()
    .sort({ _id: -1 })
    .limit(3)
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => {
      console.log(error);
    });
});

//submit the data
router.post("/new-posts", (req, res) => {
  const { title, author, imgUrl } = req.body;

  if (!title || !author || !imgUrl) {
    res.json({ err: "All fields are required" });
  }

  const post = new Post({
    title,
    author,
    imgUrl,
  });
  post
    .save()
    .then(() => {
      res.json({ msg: "Post Created" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/search/:str", (req, res) => {
  const { str } = req.params;

  if (!str) {
    res.json({ err: "Nothing is searched!" });
  }

  Post.find({ $text: { $search: str } })
    .then((post) => {
      res.json({ msg: "Found!", post });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
