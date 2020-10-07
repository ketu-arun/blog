import React from "react";

const BreasCrumb = () => {
  return (
    <div>
      <div className='showcase'>
        <div className='showcase-image'>
          <img
            src='./images/ruben-bagues-vPQfc4niDh0-unsplash.png'
            alt='showcase'
          />
        </div>

        <div className='showcase-content'>
          <div className='container'>
            <div className='container-header'>
              <h2>
                <a href='blog-post.html'>
                  20 Essential Photography Tips Every Photographer Needs to
                  Remember
                </a>
              </h2>
              <p>
                At vero eos et accusamus et iusto odio digniss ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique At vero eos et.
              </p>
            </div>

            <div className='flex-form'>
              <div className='flex-column1'>
                <p>
                  <img src='./images/Image 6@2x.png' alt='' />
                  <span className='flex-text'>Lawren Stephen</span>
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
      </div>
    </div>
  );
};

export default BreasCrumb;
