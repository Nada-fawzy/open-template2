import React, { useEffect } from 'react'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Features = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className={`row py-4 mb-3 px-0 justify-content-center`} style={{borderBottom:'1px solid gray' }}>

        <div className='col-lg-8 d-flex flex-column justify-content-center align-items-center py-3'>
            <h1 className={`text-light text-center text-extrabold m-0 `} >The majority our customers do not understand their workflows.</h1>
            <p className={`text-center text-gray my-3`} >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        {/* features */}
        <div className='row w-100 mt-3 d-flex justify-content-center flex-wrap'>
            
            {/* Item -> 1 */}
            <div  className='col-10 col-lg-4 d-flex flex-column align-items-center mb-4' data-aos="fade-up" data-aos-delay="200">
                <div className='rounded-5 bg-primary d-flex align-items-center justify-content-center mb-4'
                 style={{width:'65px' , height:'65px'}}>
                    <i className="fa-regular fa-star text-light m-0 fs-4"></i>
                </div>
                <h4 className="h4 mb-2 text-bold text-light text-center">Instant Features</h4>
                <p className="text-center text-gray text-center">Duis cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* Item -> 2 */}   
            <div className='col-10 col-lg-4 d-flex flex-column align-items-center mb-4' data-aos="fade-up" data-aos-delay="300">
                <div className='rounded-5 bg-primary d-flex align-items-center justify-content-center mb-4'
                 style={{width:'65px' , height:'65px'}}>
                    <i className="fa-regular fa-file-lines text-light m-0 fs-4"></i>
                </div>
                <h4 className="h4 mb-2 text-bold text-light text-center">Instant Features</h4>
                <p className="text-center text-gray text-center">Duis cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* Item -> 3 */}
            <div className='col-10 col-lg-4 d-flex flex-column align-items-center mb-4' data-aos="fade-up" data-aos-delay="400">
                <div className='rounded-5 bg-primary d-flex align-items-center justify-content-center mb-4'
                 style={{width:'65px' , height:'65px'}}>
                    <i className="fa-solid fa-earth-americas text-light m-0 fs-4"></i>
                </div>
                <h4 className="h4 mb-2 text-bold text-light text-center">Instant Features</h4>
                <p className="text-center text-gray text-center">Duis cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* Item -> 4 */}
            <div className='col-10 col-lg-4 d-flex flex-column align-items-center mb-4' data-aos="fade-up" data-aos-delay="200">
                <div className='rounded-5 bg-primary d-flex align-items-center justify-content-center mb-4'
                 style={{width:'65px' , height:'65px'}}>
                    <i className="fa-solid fa-users-viewfinder text-light m-0 fs-4"></i>
                </div>
                <h4 className="h4 mb-2 text-bold text-light text-center">Instant Features</h4>
                <p className="text-center text-gray text-center">Duis cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* Item -> 5 */}
            <div className='col-10 col-lg-4 d-flex flex-column align-items-center mb-4' data-aos="fade-up" data-aos-delay="300">
                <div className='rounded-5 bg-primary d-flex align-items-center justify-content-center mb-4'
                 style={{width:'65px' , height:'65px'}}>
                    <i className="fa-regular fa-thumbs-up text-light m-0 fs-4"></i>
                </div>
                <h4 className="h4 mb-2 text-bold text-light text-center">Instant Features</h4>
                <p className="text-center text-gray text-center">Duis cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* Item -> 6 */}
            <div className='col-10 col-lg-4 d-flex flex-column align-items-center mb-4' data-aos="fade-up" data-aos-delay="400">
                <div className='rounded-5 bg-primary d-flex align-items-center justify-content-center mb-4'
                 style={{width:'65px' , height:'65px'}}>
                    <i className="fa-solid fa-list-check text-light m-0 fs-4"></i>
                </div>
                <h4 className="h4 mb-2 text-bold text-light text-center">Instant Features</h4>
                <p className="text-center text-gray text-center">Duis cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

        </div>
    </div>
  )
}

export default Features
