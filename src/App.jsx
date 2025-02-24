import React from 'react'

import HeroSection from './components/HeroSection'
import Technology from './components/Technology'
import Service from './components/Service'
import About from './components/About'
import Updates from './components/Updates'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  return (
    <>
    <div>
      <HeroSection/>
      <Technology/>
      <Service/>
      <About/>
      {/* <Updates/> */}
      <Contact/>
      <Footer/>
    
    </div>
    </>
  )
}

export default App