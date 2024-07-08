import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Zigzag from '../Zigzag/Zigzag'
import Testimonials from '../Testimonials/testimonials'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div className='container '>
      {/* <Header></Header> */}
      <Hero></Hero>
      <Features></Features>
      <Zigzag></Zigzag>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  )
}
