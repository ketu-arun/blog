import React from "react";

const PostItem = ({ post }) => {
  return (
    <div>
      <div className='post-1 post'>
        <div className='box1 box'></div>
        <div>
          <h2>
            <a href='blog-post.html'>{post.title}</a>
          </h2>
        </div>
        <div className='flex-form'>
          <div className='flex-column1'>
            <p>
              <img src='../images/Image 29@2x 2.png' alt='' />
              <span className='flex-text'>{post.author}</span>
            </p>
          </div>
          <br />
          <div className='flex-column3'>
            <p>|</p>
          </div>
          <br />
          <div className='flex-column2'>
            <p>
              <img src='./images/clock (1).svg' alt='' />
              <span className='flex-text'> 10 min read</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
