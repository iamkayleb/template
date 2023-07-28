import React from 'react'

function Top() {
  return (
    <>
      <div className="header">
        <img src="../src/assets/logo.png" alt="logo" className="logo" />
        <div className="sign-up-in">
          <button className="sign-up">Sign Up</button>
          <button className="sign-in">Sign In</button>
        </div>
        
      </div>
      <div className="hero">
          <div className="hero-text">
            <h1>Landing template for startups</h1>
            <p>Our landing page template works on all devices, so you only have to 
            set it up once, and get beautiful results forever.</p>
          </div>
          <div className="hero-buttons">
            <button className='trial'>Start Free Trial</button>
            <button className='learn-more'>Learn More</button>
          </div>
          <div className="hero-image">
            <img src="../src/assets/group.jpg" alt="group" />
          </div>
        </div>
        <div className="workflow">
          <div className="wf-header">
            <h1>The majority of our customers do not understand their workflows.</h1>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit laborum</p>
          </div>
          <div className="wf-items">
            <div className="wf-item">
              <img src="../src/assets/star.png" alt="" className='wf-img'/>
              <h1>Instant Features</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>
            <div className="wf-item">
              <img src="../src/assets/blog.png" alt="" className='wf-img'/>
              <h1>Instant Features</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>
            <div className="wf-item">
              <img src="../src/assets/globe.png" alt="" className='wf-img'/>
              <h1>Instant Features</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>
            <div className="wf-item">
              <img src="../src/assets/head.png" alt="" className='wf-img'/>
              <h1>Instant Features</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>
            <div className="wf-item">
              <img src="../src/assets/like.png" alt="" className='wf-img'/>
              <h1>Instant Features</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>
            <div className="wf-item">
              <img src="../src/assets/text.png" alt="" className='wf-img'/>
              <h1>Instant Features</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Top