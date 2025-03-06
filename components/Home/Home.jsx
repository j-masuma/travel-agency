import React from 'react'
import HeroSection from './Hero/HeroSection'
import About from './About/About'
import Testimonial from './Testimonial/Testimonial'
import Destination from './Destination/Destination'
import Pakage from './Pakage/Pakage'
import TopDest from './Destination/TopDest'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Destination/>
        <About/>
        <TopDest/>
        <Pakage/>
        <Testimonial/>
    </div>
  )
}

export default Home