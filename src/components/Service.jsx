import React from 'react'
import {images} from '../assets/photos'
  //motion
  import {motion} from 'framer-motion'
  //variants
  import {fadeIn} from '../Variants'

const services=[
    {
        title: "Graphic Design",
        photo:  images.GraphicDesign,
       text:"Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content.according to the American Institute of Graphic Arts (AIGA®)."
    },
    {
        title: "Web Development",
        photo:  images.WebDevelopment,
       text:"web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. "
    },
    {
        title: "Post-production",
        photo:  images.PostProduction,
       text:"Post-production is the editing portion of the filmmaking or video production process. During this process, the post-production crew not only pieces together raw footage, but adds sound and visual effects."
    }
]
function Service() {
  return (
    <>
    <div id='services'>
    <section className="py-16 px-7 sm:px-32 md:px-24 ">
       <div className="max-w-8xl mx-auto sm:px-6">
         <motion.div 
         variants={fadeIn("right", 0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.4}}

         className="lg:text-center">
           <h2 className="text-black text-4xl tracking-tight font-bold text-center">
           Our <br /> <span className='font-sans font-black text-techido-blue md:pt-26 tracking-tighter text-center md:text-5xl sm: text-4xl mb-12 sm: pt-8'>Services</span>
           </h2>
         </motion.div>
         <div className='flex flex-wrap gap-8'>
         {services.map((serviceitems) => (
            <motion.div 
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.4}}
             key={serviceitems.title} className='relative'>
                
                <div className='w-3/3 h-fit ml-10 rounded-lg text-center bg-teal-100 px-4 py-16 lg:w-fit md:w-3/3 md:px-28  lg:px-8    '>
                <img src={serviceitems.photo} alt="" className='w-20 h-20'   />
                <h1 className='font-serif text-black text-center mt-5'>{serviceitems.title}</h1>
                <p className='text-base text-center w-80 ml-12 leading-6 font-serif font-bold text-slate-700 tracking-tight '>{serviceitems.text}</p>
                <a href="https://wa.me/919746696969?text=Hi%20Techido%20Designs" className='no-underline text-black font-base font-serif font-bold hover:text-blue-600'>Learn More</a>
                </div>
            </motion.div>
            
         ))}
         </div>
         </div>
         </section>
    </div>
    </>
  )
}

export default Service