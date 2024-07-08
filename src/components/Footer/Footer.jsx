import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div  className='row pt-4 pb-1 px-lg-0 px-2 justify-content-center'>
      <div className='col-lg-5 d-flex flex-column align-items-start'>
          <div className={`bg-light rounded-5 logo 
                m-0 d-flex align-items-center justify-content-center`}>
          </div>
          <p className='text-gray pt-2' style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. magni molestiae architecto suscipit iste quaerat illo, nihil accusantium?</p>
      </div>

      <div className='col-lg-7 d-flex flex-lg-row flex-column flex-wrap justify-content-around gap-3 text-light'>
            <div className='d-flex flex-column'>
              <h6 className='text-bold p-0 m-0 mb-1'>Products</h6>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Web Studio</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>DynamicBox Flex</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Programming Forms</a>
            </div>
            <div className='d-flex flex-column'>
              <h6 className='text-bold p-0 m-0 mb-1'>Resources</h6>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Nostrud exercitation</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Visual mockups</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Nostrud exercitation</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Visual mockups</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Nostrud exercitation</a>
            </div>
            <div className='d-flex flex-column'>
              <h6 className='text-bold p-0 m-0 mb-1'>Company</h6>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Consectetur adipiscing</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Labore et dolore</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Consectetur adipiscing</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Labore et dolore</a>
              <a href="/" className='text-gray text-decoration-none p-0 link-text'>Consectetur adipiscing</a>
            </div>
      </div>

      <div className='d-flex flex-lg-row flex-column-reverse justify-content-between pt-3 gap-2 py-2'>
        <p className='text-gray ' style={{fontSize:'14px'}}>© Nada.com. All rights reserved.</p>
        <div className='d-flex flex-wrap gap-1'>
          <i class="fa-solid fa-x icon"></i>
          <i class="fa-brands fa-github icon"></i>
          <i class="fa-brands fa-facebook-f icon"></i>
          <i class="fa-brands fa-instagram icon"></i>
          <i class="fa-brands fa-linkedin-in icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
