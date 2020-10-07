import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../../actions/postAction";

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onSubmit = (e) => {
    if (title === "" || author === "") {
      console.log("all fields required");
      e.preventDefault();
    } else {
      const newPost = {
        title,
        author,
        imageUrl,
      };

      addPost(newPost);

      console.log("post added");

      // clearFields
      setTitle("");
      setAuthor("");
      setImageUrl("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Add Post</h2>
        <div>
          <label htmlFor='Title'>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='Author'>Author</label>
          <input
            type='text'
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='imageUrl'>Image Url</label>
          <input
            type='text'
            name='imageUrl'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Add Post</button>
        </div>
      </form>
    </>
  );
};

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AddPost);
