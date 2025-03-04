import React from 'react'
import HeroSection from './Hero/HeroSection'
import About from './About/About'
import Testimonial from './Testimonial/Testimonial'
import Destination from './Destination/Destination'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Destination/>
        <About/>
        <Testimonial/>
    </div>
  )
}

export default Home