import React from 'react'
import Subscribe from './Subscribe'
import Footer from './Footer'

function Bottom() {
  return (
    <>
      <div className="testimonials">
        <div className="test-header">
          <h1>Don't take our word for it</h1>
          <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
        </div>
        <div className="tabs">
          <div className="tab">
            <img src="../src/assets/teeth.jpg" alt="" />
            <p>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
            <br/>
            <h2>Anastasia Dan / <span>UX Board</span></h2>
          </div>
          <div className="tab">
            <img src="../src/assets/lowcut.jpg" alt="" />
            <p>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
            
            <h2>Roman Level / <span>AppName</span></h2>
          </div>
          <div className="tab">
            <img src="../src/assets/dread.jpg" alt="" />
            <p>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
            <br/>
            <h2>Akex Sackett / <span>Reform Layouts</span></h2>
          </div>
        </div>
      </div>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Bottom