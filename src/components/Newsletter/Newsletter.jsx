import React from 'react'

const Newsletter = () => {
  return (
    <div className='row py-4 mb-3 px-0 justify-content-center'>
      <div className='col px-3'>
        <div className='row bg-primary mx-1 px-3 py-5 rounded-1 d-flex flex-wrap'>
            <div className='col-lg-6 px-3'>
                <h3 className='text-extrabold text-light text-center text-lg-start'>Stay in the loop</h3>
                <p className='text-gray  text-center text-lg-start'>Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className='col-lg-6 p-0 px-3 d-flex justify-content-center align-items-center gap-2 flex-wrap'>
                <input type='text' placeholder='Your best email...' className='p-2 p-3 w-75 rounded-1 border-0 outline-0' style={{height:'50px'}}></input>
                <button className='btn btn-dark p-2 px-lg-3 px-5' style={{height:'50px'}}>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
