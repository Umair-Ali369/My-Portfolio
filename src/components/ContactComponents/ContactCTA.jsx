import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ContactCTA = () => {
  return (
    <section className='p-20'>

      <div className='flex flex-col items-start md:items-center justify-center'>
        <h5 className='italic  text-xl md:text-2xl lg:text-3xl font-semibold lg:text-center text-start text-teal-400 mb-4'>"Every great partnership starts with a simple message"</h5>
        <p className='text-xl md:text-2xl text-gray-400 lg:text-center text-start max-w-2xl md:max-w-3xl  lg:max-w-4xl mb-4 '>Let's create something valuable, meaningful, and lasting together</p>
         <a href='#contact'>
                    <motion.button 
                    whileHover={{scale:1.05, boxShadow:"0px 0px 20px rgba(94,234,212,.2)"}}
                    className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300">
                      Let's Talk
                    </motion.button>
                  </a>
      </div>


    </section>
  )
}

export default ContactCTA