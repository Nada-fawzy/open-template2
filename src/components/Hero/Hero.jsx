import React, { useEffect } from 'react'
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import styles from './Hero.module.css'
import video from '../../assets/video.mp4'
import videoThumb from '../../assets/hero-image.jpg'
// import playerIcon from '../../assets/playIcon.png'
import playerIcon from '../../assets/media_play.png'
import ReactPlayer from 'react-player';
const Hero = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <div className={`row py-4 mt-4 px-0 justify-content-center`}>
        <div className='col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center py-3'>
            <h1 className={`text-light text-center text-extrabold m-0 `} data-aos="fade-up">Landing template for startups</h1>
            <p className={ `text-center text-gray my-3`} data-aos="fade-up" data-aos-delay="200">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            <div className=' py-2 d-flex justify-content-center gap-2 flex-column flex-lg-row'>
                <button className='btn btn-primary p-0 px-lg-4 px-5 py-2 fw-bold rounded-0 shadow rounded-1' data-aos="fade-up" data-aos-delay="400">Start Free Trial</button>
                <button className='btn border-0 p-0 px-lg-4 px-5 py-2 fw-bold btn-gray rounded-0 shadow rounded-1' data-aos="fade-up" data-aos-delay="600">Learn More</button>
            </div>
        </div>
        <div className='col-12 col-lg-11 mt-5 py-2' data-aos="fade-up" data-aos-delay="800">
            <ReactPlayer
            url={video}
            light={videoThumb}
            width="100%" 
            height={'550px'}
            controls="controls"
            playIcon={
                <div style={{width:'65px' , height:'65px' , opacity:'70%'}} 
                className='rounded-5 bg-light d-flex justify-content-center align-items-center'>
                    <img src={playerIcon} width={'30%'} />
                </div>}
            ></ReactPlayer>
            {/* <video src={video} width="100%" controls="controls" ></video> */}
        </div>
    </div>
  )
}

export default Hero
