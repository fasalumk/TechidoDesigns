import React from 'react'
import { images } from '../assets/photos'

  //motion
  import {motion} from 'framer-motion'
  //variants
  import {fadeIn} from '../Variants'


function About() {
  return (
  < >
  <div id='about'>
    <section className='px-3 lg:px-10 lg:pt-16 '>

  <div className='pt-24 pb-10 content-center' >
  <div className='max-w-8xl mx-auto sm:px-6 lg:px-5 md:px-1 flex flex-col lg:flex-row ' >
  
   <div 
        //  variants={fadeIn("down", 0.5)}
        //  initial="hidden"
        //  whileInView={"show"}
        //  viewport={{once: false, amount:0.4}}
         
         className='w-full lg:w-1/2 '> 
        
      <img src={images.About} alt="aboutimage"  className='w-full rounded-2xl md:w-full lg:w-fit'/>
      </div>
    

   <div className='w-full lg:w-2/2'> 
    <h1 className='text-techido-blue ml-1 text-techido sm: text-3xl lg:text-2xl sm: font-extrabold lg:font-bold lg:pl-10'>ABOUT US </h1>
    <p className='text-base text-justify ml-10 lg:pr-10 text-gray-700  md: pr-2  lg:pl-10 md:pr-2'>Have you ever dreamt of a platform which would help you realise your creative dreams? A place that lets you express your wonderful ideas freely, that encourages you to pursue your passion. The distance between your dream and its realisation is now very short. We present to you, Techido Designs, the perfect platform to hone your creative skills. <br /> <br /> 
     At Techido Designs, we help students become professionals in the highly competitive world of art and design. Offering one-year, six-months diploma courses in graphic and web design, the school centers around a “learning by designing” methodology, in which students solve real-life design problems with the help of qualified faculty members who are opinion leaders in their fields. Students also have the opportunity to work on live projects with some of the most exciting clients. We believe that working on real-world projects is the best way to learn. That’s why 90 percent of our curriculum is “learning by designing.” You’ll work on practical design assignments that replicate today’s professional design practices in an environment supportive of learning and experimentation.</p>
   </div> 
  </div>
  </div>
  </section>
  </div>
  </>
  )
}

export default About