import React from 'react'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import feature1 from '../../assets/features-03-image-01.png'
import feature2 from '../../assets/features-03-image-02.png'
import feature3 from '../../assets/features-03-image-03.png'

const Zigzag = () => {

  return (
    <div className='row py-4 px-3 mb-3 justify-content-center'>

        <div className='col-lg-8 d-flex flex-column justify-content-center align-items-center py-3'>
            <div className='bg-primary px-3 py-2 bg-opacity-75 mb-3 rounded-5' 
            data-aos="fade-down" data-aos-delay="200"
            >
                <h6 className='text-dark m-0'>Reach Goals That Matter</h6>
            </div>
            <h1 className={`text-light text-center text-extrabold m-0 `} >One product, unlimited solutions.</h1>
            <p className={`text-center text-gray my-3`} >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
        </div>

        {/* ITEMS */}
        {/* item1 */}
        <div className='row mt-4 p-0 py-3 justify-content-between flex-wrap align-items-center'>
          {/* content */}
            <div className='col-lg-6 p-0 pe-lg-5' data-aos="fade-right">
              <p className='text-primary text-top m-0 mb-1'>More speed. Less spend</p>
              <h3 className='text-extrabold text-light mb-3'>Keep projects on schedule</h3>
              <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className='p-0'>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Duis aute irure dolor in reprehenderit</p>
                </li>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Excepteur sint occaecat</p>
                </li>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Amet consectetur adipiscing elit</p>
                </li>
              </ul>
            </div>
          {/* img */}
            <div className='col-lg-6 p-0 ps-lg-3 ' data-aos="fade-up">
              <img src={feature1} alt='Feature 1' className='w-100'></img>
            </div>
        </div>

        {/* item2 */}
        <div className='row mt-5 p-0 py-3 justify-content-between flex-lg-row flex-column-reverse flex-wrap align-items-center'>
            {/* img */}
            <div className='col-lg-6 p-0 pe-lg-3' data-aos="fade-up">
              <img src={feature2} alt='Feature 1' className='w-100'></img>
            </div>
          {/* content */}
            <div className='col-lg-6 p-0 ps-lg-5 mt-3 mt-lg-0' data-aos="fade-right">
              <p className='text-primary text-top m-0 mb-1'>More speed. Less spend</p>
              <h3 className='text-extrabold text-light mb-3'>Keep projects on schedule</h3>
              <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className='p-0'>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Duis aute irure dolor in reprehenderit</p>
                </li>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Excepteur sint occaecat</p>
                </li>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Amet consectetur adipiscing elit</p>
                </li>
              </ul>
            </div>

        </div>

          {/* item3 */}
          <div className='row mt-5 p-0 py-3 justify-content-between flex-wrap align-items-center'>
          {/* content */}
            <div className='col-lg-6 p-0 pe-lg-5' data-aos="fade-right">
              <p className='text-primary text-top m-0 mb-1'>More speed. Less spend</p>
              <h3 className='text-extrabold text-light mb-3'>Keep projects on schedule</h3>
              <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className='p-0'>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Duis aute irure dolor in reprehenderit</p>
                </li>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Excepteur sint occaecat</p>
                </li>
                <li className='d-flex gap-2 align-items-center my-1'>
                  <i class="fa-solid fa-check text-success p-0 "></i>
                  <p className='text-gray p-0 m-0'>Amet consectetur adipiscing elit</p>
                </li>
              </ul>
            </div>
          {/* img */}
            <div className='col-lg-6 p-0 ps-lg-3 ' data-aos="fade-up">
              <img src={feature3} alt='Feature 1' className='w-100'></img>
            </div>
        </div>

    </div>
  )
}

export default Zigzag;
