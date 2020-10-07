const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
// const Category = require("../models/Category");
const Category = mongoose.model("Category");

router.get("/categories", (req, res) => {
  Category.find()
    .then((categories) => {
      res.json({ categories });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/category-num", (req, res) => {
  Category.count({})
    .then((categories) => {
      res.json({ categories });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/new-category", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.json({ err: "Name is required" });
  }

  const category = new Category({
    name,
  });

  category
    .save()
    .then(() => {
      res.json({ msg: "Category Created" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
