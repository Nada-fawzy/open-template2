import React from 'react'
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='container'>
        <div className={`row py-4 mt-4 px-0 justify-content-center`}>

            <div className='col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center py-3'>
                <h1 className={`text-light text-center text-extrabold m-0`} data-aos="fade-up">Welcome. We exist to make entrepreneurship easier.</h1>
            </div>
            <form className='w-100 d-flex justify-content-center'>
                <div className='row w-100 d-flex flex-column justify-content-center align-items-center py-4'>
                        <button className='col-lg-4 px-0 col-11 m-0 py-2 my-4 btn btn-danger rounded-0 d-flex justify-content-between align-items-center'>
                            <i class="fa-brands fa-google d-inline p-2 px-3 border-1" 
                            style={{borderRightColor:'#fff' , borderRightStyle:'solid' }}></i>
                            <div className='d-flex w-100 justify-content-center'>
                                <p className='text-extrabold p-0 m-0 d-inline px-2 pe-3'>Sign up with Google</p>
                            </div>
                        </button> 
                        <div className='col-lg-4 px-0 col-11 mb-4 py-2 d-flex align-items-center justify-content-center'>
                            <span className='me-2 fw-light text-secondary mb-2 d-lg-block d-none'>..................... </span>
                            <p className='text-gray text-center m-0' style={{fontSize:'16px'}}>
                                Or, register with your email
                                </p>
                            <span className='ms-2 fw-light text-secondary mb-2 d-lg-block d-none'>..................... </span>
                        </div>

                        <div className='col-lg-4 px-0 col-11 mb-3'>
                            <label className='text-light fw-semibold d-block mb-1 fs-small'> Full Name <span className='text-danger m-0 p-o'>*</span></label>
                            <input className='w-100 p-2 bg-transparent border-1 text-light' 
                            style={{borderStyle:'solid' ,borderColor:'gray'}} type='text' placeholder='First and Last Name'></input>
                        </div>

                        <div className='col-lg-4 px-0 col-11 mb-3'>
                            <label className='text-light fw-semibold d-block mb-1 fs-small'> Company Name <span className='text-danger m-0 p-o'>*</span></label>
                            <input className='w-100 p-2 bg-transparent border-1 text-light' 
                            style={{borderStyle:'solid' ,borderColor:'gray'}} type='text' placeholder='Your Company or App Name'></input>
                        </div>

                        <div className='col-lg-4 px-0 col-11 mb-3'>
                            <label className='text-light fw-semibold d-block mb-1 fs-small'> Work Email <span className='text-danger m-0 p-o'>*</span></label>
                            <input className='w-100 p-2 bg-transparent border-1 text-light' 
                            style={{borderStyle:'solid' ,borderColor:'gray'}} type='text' placeholder='You@yourcompany.com'></input>
                        </div>

                        <div className='col-lg-4 px-0 col-11 mb-3'>
                            <label className='text-light fw-semibold d-block mb-1 fs-small'> Password <span className='text-danger m-0 p-o'>*</span></label>
                            <input className='w-100 p-2 bg-transparent border-1 text-light' 
                            style={{borderStyle:'solid' ,borderColor:'gray'}} type='password' placeholder='Password (at least 10 charecters)'></input>
                        </div>

                        <p className='text-gray text-center m-0 col-lg-4 px-0 col-11' style={{fontSize:'16px'}}>
                                I agree to be contacted by Open PRO about this offer as per the Open PRO
                                 <Link to='/' className='ms-1 text-gray ' style={{fontSize:'16px'}}>Privacy Policy</Link>.
                        </p>

                        <button className='col-lg-4 px-0 col-11 m-0 py-2 my-4 btn btn-primary rounded-0 d-flex justify-content-center align-items-center'>
                            <p className='text-extrabold p-0 m-0 d-inline px-2 pe-3'>Sign up</p>
                        </button> 

                        <p className='text-gray text-center m-0 col-lg-4 px-0 col-11' style={{fontSize:'16px'}}>
                        Already using Open PRO?
                                 <Link to='/signin' className='ms-1 text-gray text-primary' style={{fontSize:'16px'}}>Sign in</Link>
                        </p>

                </div>
            </form>
        </div>
    </div>
    
  )
}

export default Signup
