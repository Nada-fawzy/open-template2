import React from 'react'
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='container'>
    <div className={`row py-4 mt-4 px-0 justify-content-center`}>

        <div className='col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center py-3'>
            <h1 className={`text-light text-center text-extrabold m-0`} data-aos="fade-up">Welcome back. We exist to make entrepreneurship easier.</h1>
        </div>
        <form className='w-100 d-flex justify-content-center'>
            <div className='row w-100 d-flex flex-column justify-content-center align-items-center py-4'>
                    <button className='col-lg-4 px-0 col-11 m-0 py-2 my-4 btn btn-danger rounded-0 d-flex justify-content-between align-items-center'>
                        <i class="fa-brands fa-google d-inline p-2 px-3 border-1" 
                        style={{borderRightColor:'#fff' , borderRightStyle:'solid' }}></i>
                        <div className='d-flex w-100 justify-content-center'>
                            <p className='text-extrabold p-0 m-0 d-inline px-2 pe-3'>Sign in with Google</p>
                        </div>
                    </button> 
                    <div className='col-lg-4 px-0 col-11 mb-4 py-2 d-flex align-items-center justify-content-center'>
                        <span className='me-2 fw-light text-secondary mb-2 d-lg-block d-none'>..................... </span>
                        <p className='text-gray text-center m-0' style={{fontSize:'16px'}}>
                            Or, sign in with your email
                            </p>
                        <span className='ms-2 fw-light text-secondary mb-2 d-lg-block d-none'>..................... </span>
                    </div>

                    <div className='col-lg-4 px-0 col-11 mb-3'>
                        <label className='text-light fw-semibold d-block mb-1 fs-small'>Email </label>
                        <input className='w-100 p-2 bg-transparent border-1 text-light' 
                        style={{borderStyle:'solid' ,borderColor:'gray'}} type='text' placeholder='You@yourcompany.com'></input>
                    </div>

                    <div className='col-lg-4 px-0 col-11 mb-3'>
                        <label className='text-light fw-semibold d-block mb-1 fs-small'> Password</label>
                        <input className='w-100 p-2 bg-transparent border-1 text-light' 
                        style={{borderStyle:'solid' ,borderColor:'gray'}} type='password' placeholder='Password (at least 10 charecters)'></input>
                    </div>

                    <div className='col-lg-4 px-0 col-11 mb-0 d-flex align-items-center justify-content-between'>
                      <div className='d-flex align-items-center'>
                        <input type='checkbox' className='me-2' style={{width:'18px' , height:'18px'}} ></input>
                        <label className='text-gray fw-semibold' style={{fontSize:'16px'}}>
                          Keep me signed in 
                        </label>        
                      </div>
                      <Link to='/signup' className='ms-1 text-gray text-primary text-decoration-none' style={{fontSize:'16px'}}>Forgot Password?</Link>
                    </div>
                    

                    <button className='col-lg-4 px-0 col-11 m-0 py-2 my-4 btn btn-primary rounded-0 d-flex justify-content-center align-items-center'>
                        <p className='text-extrabold p-0 m-0 d-inline px-2 pe-3'>Sign in</p>
                        
                    </button> 

                    <p className='text-gray text-center m-0 col-lg-4 px-0 col-11' style={{fontSize:'16px'}}>
                     Don’t you have an account?
                             <Link to='/signup' className='ms-1 text-gray text-primary' style={{fontSize:'16px'}}>Sign up</Link>
                    </p>

            </div>
        </form>
    </div>
</div>
  )
}

export default Signin
