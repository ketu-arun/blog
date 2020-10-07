const mongoose = require("mongoose");

const post = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//search
// post.index({ "$**": "text" });

mongoose.model("Post", post);
