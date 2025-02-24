import React from 'react'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../Variants'

function Contact() {
  return (
    <>
    <div id='contact'>
    <div className="w-full mt-10 h-96 ">
    <div className='max-w-8xl mx-auto sm:px-6  mx-auto flex flex-col lg:flex-row ' >

   <div 
        //  variants={fadeIn("right", 0.5)}
        //  initial="hidden"
        //  whileInView={"show"}
        //  viewport={{once: false, amount:0.4}}
         className='w-full lg:w-1/2'>
     <h1 className='font-sans text-grey text-2xl pt-20 pl-36 lg:pt-36 md:pl-72 lg:pl-36 '>Contact</h1>
     <h2 className='text-lg  leading-8 text-grey pl-28 md:pl-64 lg:pl-36  '>Phone: 97466 96969 <br /> Instagram: techido.in</h2>
   </div>
   <div 
        //  variants={fadeIn("right", 0.5)}
        //  initial="hidden"
        //  whileInView={"show"}
        //  viewport={{once: false, amount:0.4}}
          className='w-full lg:w-5/12'> 
   <p className='text-center leading-6 sm:text-lg  text-grey pt-5 pl-7 pr-7 text-sm lg:pt-36  lg:px-1 md:px-20 '>We are passionate about what we do, and we strive to exceed your expectations by delivering innovative solutions that make a lasting impact. Contact us today to discuss your project and let us help you achieve your digital goals. We look forward to working with you and being a part of your success story.</p>
   </div>

   </div>
</div>
<br /><br /><br /><br /><br /><br />
</div>
    </>
  )
}

export default Contact