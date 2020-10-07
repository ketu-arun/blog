import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postAction";

const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
    //eslint-disable-next-line
  }, []);

  if (loading || posts === null) {
    return <p>no logs to show</p>;
  }

  return (
    <>
      <main id='popular' className='popular'>
        <div className='container'>
          <div className='container-header'>
            <h2>Most Popular</h2>
          </div>

          <div className='container-content'>
            <div className='post-flex'>
              {!loading &&
                posts !== null &&
                posts.map((post) => <PostItem post={post} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
