import React from "react";
import Navbar from "../layout.js/Navbar";
import Footer from "../layout.js/Footer";
import AddPost from "../parts/AddPost";
import Posts from "../parts/Posts";

const Home = () => {
  return (
    <div>
      <Navbar />
      hi Arun you are learning
      <Posts />
      <AddPost />
      <Footer />
    </div>
  );
};

export default Home;
