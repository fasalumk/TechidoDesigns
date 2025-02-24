import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { images } from '../assets/photos'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../Variants'

function HeroSection() {
   const navItems=(<>
   <Router>
      <li><a  href='#home'  className='no-underline  text-gray-700 hover:text-blue-600'>Home</a></li>
      <li><a  href='#technologies'  className='no-underline  text-gray-700 hover:text-blue-600'>Technologies</a></li>
      <li><a  href='#services'  className='no-underline  text-gray-700 hover:text-blue-600'>Services</a></li>
      <li><a  href='#about'  className='no-underline  text-gray-700 hover:text-blue-600'>About</a></li>
      <li><a  href='#updates'  className='no-underline  text-gray-700 hover:text-blue-600'>Updates</a></li>
      <li><a  href='#contact'  className='no-underline  text-gray-700 hover:text-blue-600'>Contact</a></li>
      </Router>
   </>)
   
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto ' >
    <div className="navbar fixed top-0 left-0 right-0 bg-white z-10 h-6 " >
  <div className="navbar-start " >
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-700 font-medium bg-white">
        {navItems}
      </ul>
    </div >
    <Router>
     <Link to='/'><img src={images.icon} alt="" className=' w-28 lg:w-32 sm:pl-10  md: w-40 pl-2'  /></Link>
     </Router>
  </div >
  <div className="navbar hidden lg:flex" >
    <ul className="menu menu-horizontal mr-32 text-gray-700 font-medium" >
      {navItems}
    </ul>
  </div >
</div>
</div>
<div  
      // variants={fadeIn("up", 0.5)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{once: false, amount:0.4}}
      
      className='max-w-8xl mx-auto sm:px-6 '>
  <div 
            
            className='w-full ' id='home'  >
               <h1 className=' sm: text-5xl tracking-tight leading-none mt-36 md:text-6xl pl-2 font-sans font-black text-center tracking-tighter lg:pt-40  pb-2 sm: pt-20'>
               Rapidly build modern websites  <br /> and designs with <span className='text-techido-blue'> Techido Designs </span>
               </h1>

               <h2 className='md:font-sans font-semibold md:text-xl leading-7 pl-2.5 text-center text-grey sm: text-sm sm: leading-5'>
               Techido  is a team of <span className='text-techido-blue'>developers, graphic designers, <br /></span>  and  <span className='text-techido-blue'>post-production </span>.  We specialize  in creating full stack  <br />websites, digital marketing, logo designs, and much more.
               </h2>
              </div>
              
            <center>  <a href="https://wa.me/919746696969?text=Hi%20Techido%20Designs">
  <button   className='w-full md:mt-36 ml-4 h-12 text-lg border-none bg-techido-blue text-white font-sans font-bold rounded-lg text-center lg:w-1/4  hover:text-blue cursor-pointer ' style={{marginTop: '30px'}}>
    Contact Us
  </button>
</a></center>

</div>

    </>
  )
}

export default HeroSection