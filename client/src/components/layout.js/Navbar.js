import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <div className='s-logo'>
            <a href='index.html'>
              <img src='images/v_Vanity_logo-06@2x 2.png' alt='Vanity' />
            </a>
          </div>
          <br />
          <div className='logo'>
            <a href='#!'> Vanity | Blog</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
