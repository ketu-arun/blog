import axios from "axios";
import { SET_LOADING, GET_POSTS, POST_ERROR, ADD_POST } from "./types";

//get Posts
export const getPosts = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.message,
    });
  }
};

//adding logs
export const addPost = (post) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    setLoading();
    const res = await axios.post("/api/new-posts", post, config);
    console.log(res.data);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.message,
    });
  }
};

// export const addPost = (post) => async (dispatch) => {
//   try {
//     setLoading();
//     const res = await fetch("/posts", {
//       method: "POST",
//       body: JSON.stringify(post),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();

//     dispatch({
//       type: ADD_POST,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText,
//     });
//   }
// };
//Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
