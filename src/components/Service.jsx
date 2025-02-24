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
       text:"Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content. According to the American Institute of Graphic Arts."
    },
    {
        title: "Web Development",
        photo:  images.WebDevelopment,
       text:"web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. "
    },
    {
        title: "Post-production",
        photo:  images.PostProduction,
       text:"Post-production is the editing portion of the filmmaking or video production process.The post-production crew not only pieces together raw footage, but adds sound and visual effects."
    }
]
function Service() {
  return (
    <>
    <div id='services'>
    <section className="py-16 px-7 sm:px-32 md:px-24">
       <div className="max-w-8xl mx-auto sm:px-6">
         <div

         className="lg:text-center">
           <h2 className="text-black text-4xl tracking-tight font-bold text-center">
           Our <br /> <span className='font-sans font-black text-techido-blue md:pt-26 tracking-tighter text-center md:text-5xl sm: text-4xl mb-12 sm: pt-8'>Services</span>
           </h2>
         </div>
         <div className='flex flex-wrap gap-8'>
         {services.map((serviceitems) => (
            <div className='relative'>
                
                <div className='w-3/3 h-fit ml-20 rounded-lg text-center bg-teal-100 px-4 py-16 lg:w-fit md:w-3/3 md:px-28  lg:px-10'>
                <img src={serviceitems.photo} alt="" className='w-20 h-20'   />
                <h1 className='text-black text-center mt-5'>{serviceitems.title}</h1>
                <p className='text-base text-center w-80 ml-12 leading-6  text-slate-700 tracking-tight '>{serviceitems.text}</p>
                <a href="https://wa.me/919746696969?text=Hi%20Techido%20Designs" className='no-underline text-black font-base  font-bold hover:text-blue-600'>Learn More</a>
                </div>
            </div>
            
         ))}
         </div>
         </div>
         </section>
    </div>
    </>
  )
}

export default Service