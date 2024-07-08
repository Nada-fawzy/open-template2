import React from 'react'
// import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import testimonial1 from '../../assets/testimonial-01.jpg'
import testimonial2 from '../../assets/testimonial-02.jpg'
import testimonial3 from '../../assets/testimonial-03.jpg'

const Testimonials = () => {
  return (
    <div className='row py-4 mb-3 px-0 justify-content-center'>
        <div className='col-lg-8 d-flex flex-column justify-content-center align-items-center py-3'>
            <h1 className={`text-light text-center text-extrabold m-0 `} >Don't take our word for it</h1>
            <p className={`text-center text-gray my-3`} >Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
        </div>

        <div className='row'>
             <div className='col-lg-4 px-2 my-2' data-aos="fade-up" data-aos-delay="100">
                <div className='bg-secondary bg-opacity-25 d-flex flex-column justify-content-center align-items-start rounded-1 px-4 py-2'> 
                    <div style={{width:'55px' , height:'55px'}} className='bg-success rounded-5 my-3 position-relative'>
                        <img src={testimonial1} className='w-100 rounded-5'></img>
                        <i class="fa-solid fa-quote-left position-absolute text-primary fs-3" style={{top:'0px' , left:'43px'}}></i>
                    </div>
                    <p className='text-gray pb-3 border-bottom border-secondary border-opacity-25'>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                    <div>
                        <h5 className='text-light d-inline'>Anastasia Dan<span className='text-secondary text-opacity-50 mx-2'>-</span></h5>
                        <button className='bg-transparent border-0 p-0'>
                            <h5 className='text-primary d-inline ux-board p-0'>UX Board</h5>
                        </button>
                    </div>
                </div>
             </div>

            <div className='col-lg-4 px-2 my-2' data-aos="fade-up" data-aos-delay="200">
             <div className='bg-secondary bg-opacity-25 d-flex flex-column justify-content-center align-items-start rounded-1 px-4 py-2'> 
                    <div style={{width:'55px' , height:'55px'}} className='bg-success rounded-5 my-3 position-relative'>
                        <img src={testimonial2} className='w-100 rounded-5'></img>
                        <i class="fa-solid fa-quote-left position-absolute text-primary fs-3" style={{top:'0px' , left:'43px'}}></i>
                    </div>
                    <p className='text-gray pb-3 border-bottom border-secondary border-opacity-25'>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                    <div>
                        <h5 className='text-light d-inline'>Anastasia Dan<span className='text-secondary text-opacity-50 mx-2'>-</span></h5>
                        <button className='bg-transparent border-0 p-0 '>
                            <h5 className='text-primary d-inline ux-board'>UX Board</h5>
                        </button>
                    </div>
                </div>
            </div>

            <div className='col-lg-4 px-2 my-2' data-aos="fade-up" data-aos-delay="300">
                <div className='bg-secondary bg-opacity-25 d-flex flex-column justify-content-center align-items-start rounded-1 px-4 py-2'> 
                    <div style={{width:'55px' , height:'55px'}} className='bg-success rounded-5 my-3 position-relative'>
                        <img src={testimonial3} className='w-100 rounded-5'></img>
                        <i class="fa-solid fa-quote-left position-absolute text-primary fs-3" style={{top:'0px' , left:'43px'}}></i>
                    </div>
                    <p className='text-gray pb-3 border-bottom border-secondary border-opacity-25'>— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                    <div>
                        <h5 className='text-light d-inline'>Anastasia Dan<span className='text-secondary text-opacity-50 mx-2'>-</span></h5>
                        <button className='bg-transparent border-0 p-0 '>
                            <h5 className='text-primary d-inline ux-board'>UX Board</h5>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonials
