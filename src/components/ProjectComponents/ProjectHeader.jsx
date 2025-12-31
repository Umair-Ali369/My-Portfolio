import React from 'react'
import { motion } from 'framer-motion'

const ProjectHeader = () => {
  return (
    <motion.section 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:.8, delay:.4}}
    className='p-24'>
      <div className='flex flex-col justify-center lg:items-center items-start'>
        <h2 className='text-xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6'>Turning Ideas Into Impactful Digital Experience</h2>
        <div className='lg:w-64 md:w-36 w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-600 mb-4'></div>
        <p className='text-gray-400 lg:text-center text-start lg:max-w-4xl md:max-2-3xl max-w-2xl text-xl mb-4'>Every line of code I write brings me closer to my dream - creating technologies that shapes the future.
          These projects represent my journey from learning fundamentals to building professional, real-world applications
        </p>
      </div>

    </motion.section>
  )
}

export default ProjectHeader