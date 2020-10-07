import React from "react";
import Navbar from "../layout.js/Navbar";
import Footer from "../layout.js/Footer";
import AddPost from "../parts/AddPost";

const Home = () => {
  return (
    <div>
      <Navbar />
      hi Arun you are learning
      <AddPost />
      <Footer />
    </div>
  );
};

export default Home;
