import React from 'react'

function Footer() {
  return (
    <>
    <footer>
        <div className="first-part">
            <div className="about">
                <img src="../src/assets/logo.png" alt="" />
                <p className="about-text">
                    Lorem ipsun is placeholddr text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
            </div>
            <div className="services">
                <ul className='service-list'>
                    <li>Products</li>
                    <li>Web Studio</li>
                    <li>DynamicBox Flex</li>
                    <li>Programming Forms</li>

                </ul>
                <ul className='service-list'>
                    <li>Resources</li>
                    <li>Noxstrud exercitation</li>
                    <li>Visual mockups</li>
                    <li>Noxstrud exercitation</li>
                    <li>Visual mockups</li>
                    <li>Noxstrud exercitation</li>

                </ul>
                <ul className='service-list'>
                    <li>Company</li>
                    <li>Consectetur adispicing</li>
                    <li>Labore et dolore</li>
                    <li>Consectetur adispicing</li>
                    <li>Labore et dolore</li>
                    <li>Consectetur adispicing</li>
                </ul>
            </div>
        </div>
        <div className="second-part">
            <div className="copyright">
                Made by <strong>Caleb.</strong> All rights reserved
            </div>
            <div className="socials">
                <img src="../src/assets/twitter.png" alt="" />
                <img src="../src/assets/github.png" alt="" />
                <img src="../src/assets/fb.png" alt="" />
                <img src="../src/assets/instagram.png" alt="" />
                <img src="../src/assets/linkedin.png" alt="" />


            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer




