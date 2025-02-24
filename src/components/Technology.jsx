import React from 'react'
import {
    FaReact,
    FaHtml5,
    FaNodeJs,
  } from "react-icons/fa";
  import {
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobeindesign,
    SiAdobepremierepro,
    SiCss3,
  }from "react-icons/si";

  //motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../Variants'
import Whatsapp from './whatsappLogo/Whatsapp';

const features = [
    {
      name: "Photoshop",
      description: "Photoshop is a critical tool for designers, web developers, graphic artists, photographers, and creative professionals. It is widely used for image editing, creating image compositions and adding affects.",
      icon: <SiAdobephotoshop size={50}  color='#043C67' />,
    },
    {
      name: "Illustrator",
      description:
        " Illustrator is the industry-standard vector graphics software that's used by millions of designers and artists to create everything from gorgeous web and mobile graphics",
      icon: <SiAdobeillustrator size={50}  color='#043C67' />,
    },
    {
      name: "InDesign",
      description:
        "InDesign is a desktop publishing and page layout designing software application. It can be used to create works such as  flyers, brochures, magazines, newspapers and ebooks.",
      icon: <SiAdobeindesign size={50}  color='#043C67' />,
    },
    {
      name: "Premiere Pro",
      description:
        "Premiere Pro is the industry-leading video editing software for film, TV and the web. Creative tools and integration with other apps and services helps you craft footage into polished films and videos.",
      icon: <SiAdobepremierepro size={50} color='#043C67'  />,
    },
    {
      name: "HTML5",
      description:
        "HTML5 is the fifth and current version of the HTML standard. HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
      icon: <FaHtml5 size={50} color='#043C67'  />,
    },
    {
      name: "CSS3",
      description:
        "CSS3 is the latest evolution of the Cascading Style Sheets language and aims to standardize and improve the rendering of documents written in the style sheet language.",
      icon: <SiCss3 size={50} color='#043C67'  />,
    },
    {
        name: "Node Js",
        description:
          "an Open Source, cross-platform runtime environment for executing JavaScript code. ",
        icon: <FaNodeJs size={50} color='#043C67'/>,
      },
      {
        name: "React Js",
        description:
          "React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development ",
        icon: <FaReact size={50}  color='#043C67'/>,
      },
  ];

function Technology() {
  return (
    <> 
    <div id='technologies'>
    <section className="py-16  md:px-1  0 lg:px-32   bg-white ">
      <Whatsapp />
       <div className="max-w-8xl mx-auto sm:px-6 ">
         <div className="lg:text-center">
           <h2 className="font-sans font-black text-techido-blue md:pt-26 tracking-tighter text-center md:text-5xl sm: text-4xl mb-12 sm: pt-8">
           Technologies <br /> <span className='text-black text-4xl tracking-tight font-bold text-center'>we use</span>
           </h2>
         </div>
         <motion.div 
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.7}}

         className="mt-10">
           <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-10">
             {features.map((feature) => (
               <div key={feature.name} className="relative">
                 <dt>
                   <div className="font-sans  items-center justify-center h-12 w-12 rounded-md bg-primary-900 text-white pl-10 sm:pl-10  ">
                     {feature.icon}
                   </div>
                   <p className="font-sans ml-16 text-lg leading-6 font-bold text-gray-900  pl-10 sm:pl-10">
                     {feature.name}
                   </p>
                 </dt>
                 <dd className=" mt-2 ml-10   text-base text-gray-500 pr-8  ">
                   {feature.description}
                 </dd>
               </div>
             ))}
           </dl>
         </motion.div>
       </div>
     </section>
     </div>
    </>
  )
}

export default Technology