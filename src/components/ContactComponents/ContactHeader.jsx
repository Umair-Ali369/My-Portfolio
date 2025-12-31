import React from 'react'
import { motion } from 'framer-motion'
import Underline from '../Other/Underline'

const ContactHeader = () => {
  return (
    <section id='contact'>
      <motion.div
      initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:.8, delay:.4}}
      
      className='flex flex-col items-start md:items-center justify-center'
      >
        <h2 className='text-xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6'>Let's Build The Future Together</h2>
        <Underline/>
        <p className='text-xl text-gray-400 mb-4 text-start md:text-center max-w-4xl'> Wether it's a startup idea, a professional project, or collaboration - I'm always open to turning great ideas into real products</p>
        <p className='text-2xl lg:text-4xl font-semibold text-teal-400 my-10 text-start md:text-center max-w-4xl'>Let's connect and create something powerfull</p>
      </motion.div>
    </section>
    
  )
}

export default ContactHeader