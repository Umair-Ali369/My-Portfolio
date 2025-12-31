import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProjectCTA = () => {
  return (
    <section className='p-20'>
      <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:.5}}
      className='flex flex-col items-center justify-center'>
        <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold lg:text-center text-start text-teal-400 mb-4 italic'>"Every big dream starts with small, consistent work"</h4>
        <p className='text-xl text-gray-400 lg:text-center text-start max-w-2xl md:max-w-3xl  lg:max-w-4xl mb-4 '>I'm constantly learning, improving, and creating aiming to collaborate with forward-thinking teams that build meaningful tech</p>
        <p className='text-xl text-gray-400 mb-4'>If you like my work or want to work together, feel free to reach out</p>
        <Link to="/contact">
            <motion.button 
            whileHover={{scale:1.05, boxShadow:"0px 0px 20px rgba(94,234,212,.2)"}}
            className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300">
              Let's Build Something Together
            </motion.button>
          </Link>
      </motion.div>
    </section>
  )
}

export default ProjectCTA