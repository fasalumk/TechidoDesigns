import React from 'react'
import { images } from '../assets/photos'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../Variants'

import { GrInstagram } from "react-icons/gr";

const photoss = [
  {
    pic: images.BooksAd
},
{
    pic: images.FishFresh1
},
{
   pic: images.FishFresh2
},
{
   pic: images.FishFresh3
},
{
   pic: images.FishFresh4
},
{
   pic: images.FishFresh5
},
{
   pic: images.Kalavesham
},
{
   pic: images.FishFresh7
}
]

function Updates() {
  return (
    <>
    <div className='max-w-8xl mx-auto sm:px-6' id='updates'>
      <section className='px-3.5 sm:px-16 '>
      <br /> <br />
    <motion.h1
         variants={fadeIn("right", 0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.4}}
          className='text-4xl font-bold tracking-tight text-techido-blue text-center'>Updates</motion.h1>
    <div 
          className='flex gap-3 flex-wrap md:grid md:grid-cols-2 lg:flex-wrap lg:flex '>
   {photoss.map((updateitems)=>(
      <div key={updateitems.pic} className='relative' >
        <img src={updateitems.pic} alt=""  className='sm:w-80 w-96 h-80 sm:pl-4 mt-1 cursor-pointer rounded-md md:w-80 pb-1.5'/>
      </div>
   ))
   }
 </div>
 <center>
   <motion.div 
         variants={fadeIn("right", 0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.4}}
          className='flex justify-center space-x-2 '>
   <a href="https://www.instagram.com/techido.in/"><button className="text-white bg-sky-800 cursor-pointer rounded text-sm border-none h-9 w-24 hover:bg-techido-blue">See More....</button></a>
   <a href="https://www.instagram.com/techido.in/"><button className="text-white bg-orange-800 cursor-pointer rounded text-sm border-none h-9 w-48 hover:bg-orange-900"><GrInstagram  size={12} />     Follow us on Instagram</button></a>
 </motion.div>
 </center>
 </section>
    </div>
    </>
  )
}

export default Updates