import React from 'react'

import { useState } from "react";
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../../Variants'
import { images } from '../../assets/photos'

const Whatsapp = () => {
    const [hovered, setHovered] = useState(false);

  return (
    <>
   <div
      className="fixed-bottom right-0 p-3 pt-60 md:pt-96 lg:pt-12 fixed"
      style={{ zIndex: "6", left: "initial" }}
    >
      <a href="https://wa.me/919746696969?text=How can I help you" target="_blank" rel="noopener noreferrer">
        <center>
          <img
            src={images.WhatsappLogo}
            
            className=""
            width="50"
            alt="whatsapp"
            style={{ zIndex: 10, position: "relative", paddingLeft:"250px"}}
            onMouseEnter={() => setHovered(true)}     // Set hovered to true on mouse enter (fade in)
            onMouseLeave={() => setHovered(false)}    // Set hovered to false on mouse leave (fade out)
          />
        </center>
      </a>

      <motion.div
        className="bg-techido-blue w-40 h-4 fixed-bottom right-0 p-3 mt-96 md:mt-96 lg:mt-5 fixed rounded-lg hidden md:block"
        style={{
          zIndex: 5,
          position: "relative",
           marginTop:"-50px",
           marginLeft:"28px"
        }}
        variants={fadeIn("left", 0.3)}       // Apply fade-in direction and delay
        initial="hidden"                     // Initial hidden state
        animate={hovered ? "show" : "hidden"} // Control animation based on hover state
      >
        <h1
          className="text-white font-thin mb-10"
          style={{ fontSize: "12px", marginTop: "-1px" }}
        >
          Need help? <span className="text-white font-normal mb-10" style={{ fontSize: "12px" }}>Chat with Us</span>
        </h1>
      </motion.div>
    </div>
    </>
  )
}

export default Whatsapp