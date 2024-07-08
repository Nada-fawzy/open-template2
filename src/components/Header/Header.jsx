import React from 'react'
import  styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='container position-sticky top-0 bg-dark z-3'>
       <div className={`row py-3`}>
        <div className={`col`}>
            <div onClick={() => navigate('/')} className={`bg-light rounded-5 ${styles.logo} 
            m-0 d-flex align-items-center justify-content-center`}>
            </div>
        </div>
        <div className={`col d-flex justify-content-end`}>
          <button onClick={() => navigate('/signin')} className={`bg-transparent border-0 fw-bold text-primary mx-2 ${styles.hover}`}>
            Sign in
          </button>
          <button onClick={() => navigate('/signup')} className={`btn btn-primary fw-bold p-0 px-3`}>
            Sign up 
          </button>
        </div>
    </div>
    </div>
   
  )
}

export default Header
