import React from 'react'

function Subscribe() {
  return (
    <>
        <div className="subscribe">
            <div className="sub-text">
                <h1>Stay in the loop</h1>
                <p>Join our newsletter to get top news before anyone else</p>
            </div>
            <form action="">
                <input type="email" name="email" id="email" className='email' placeholder='Your best email'/>
                <button type="submit" className='submit'>Subscribe</button>
            </form>
        </div>
    </>
  )
}

export default Subscribe