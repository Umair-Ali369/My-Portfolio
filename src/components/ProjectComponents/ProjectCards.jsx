import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProjectCards = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: .7, delay:.5}}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title : "Modern E-Commerce Website ",
          desc : "A clean, fully responsive e-commerce experience build to replace real-world platform like Amazon. Features include product listing, filtering, cart managment, and responsive design for al devices",
          goal : "To master real-world UI/UX and understand how dynamic shopping system works",
          stack : ["React", "TailwindCSS", "Fake Store API"],
          result : "A professional looking product store that reflects real market-level design",
          live : "https://e-commerce-project-zeta-tan.vercel.app/",
          code : "https://github.com/Umair-Ali369/E-Commerce-Project"
        },
        {
          title : "Smart Notes App",
          desc : "Build with focus & simplicity - a smart-note-taking application that store and organize ideas efficiently. Includes localstorage, real-time editing, and Framer Motion animation for smooth experience",
          goal : "To enhance state managment logic and user interactivity",
          stack : ["React", "Context API", "Framer Motion"],
          result : "A beautiful productivity app that feels intuitive and responsive",
          live : "https://react-smart-notes-app.vercel.app/",
          code : "https://github.com/Umair-Ali369/React-Smart-Notes-App"
          

        },
        {
          title : "Personal Portfolio Website",
          desc : "My own digital identity - build from scratch to reflect who I am as a developer, designer, and creator. Designed with modern, aesthetic and smooth transitions, showing both personally and professionalism. And Currently is not full completed.",
          goal : "To showcase my technical and creative abilities to potential employeers and clients",
          stack : ["React", "TaiwindCSS", "Framer Motion", "Router"],
          result : "A living example of my work ethic, passion, and design vision",
          live : "https://personal-portfolio-website-sage-seven.vercel.app/",
          code : "https://github.com/Umair-Ali369/Personal-Portfolio-Website"
        },
        {
          title : "Developer Blog Platform",
          desc : "A blog application build to share thoughts, code insights, and tutorials for dev community. It integrates dummy APIs, theme toggle, and smooth navigation - a step closer to CMS systems",
          goal : "To understand content managment and routing in a professional setup",
          stack : ["React", "TailwindCSS", "React Router"],
          result : "A lightweight, elegant, and dynamic content platform",
          live : "https://developer-blog-platform.vercel.app/",
          code : "https://github.com/Umair-Ali369/Developer-blog-platform"
        },
        {
          title : "Task Manager Dashboard",
          desc : "A productivity dashboard designed for managing daily goals, inspired by real SaaS interfaces. Display analytics, completed task, and motivational stats",
          goal : "To dive deeper into UI logic, data visualization, and dashboard design",
          stack : ["React", "ReCharts", "TailwindCSS"],
          result : "A modern, minimal, and practical management dashboard",
          live : "https://task-dashboard-mocha.vercel.app/",
          code : "https://github.com/Umair-Ali369/Task-Dashboard"

        }
      ].map((project)=>(
        <motion.div 
        whileHover={{scale:1.05, boxShadow:"0px 0px 20px rgba(94,234,212,.3)", rotate: .5}}
        className='flex flex-col lg:items-center items-start justify-center p-4 m-3 bg-[#1E293B] rounded-xl '>
          <h3 className='text-gray-300 font-semibold lg:text-3xl md:text-2xl text-xl lg:text-center text-start mb-4'> {project.title} </h3>
          <p className=' text-gray-500 mb-3 text-start lg:text-center'> {project.desc} </p>
          <h5 className='text-sm text-gray-400 mb-3 lg:text-center text-start'><span className='font-semibold'>Goal :</span> {project.goal} </h5>
          <div className='flex flex-wrap gap-4 justify-center lg:items-center items-start'>
            {project.stack.map((stac,index)=>(
              <div className='mb-3'>
                <span className='text-xs text-teal-400 font-semibold border border-teal-500/30 rounded-xl px-3 py-1'> {stac} </span>
              </div>
            ))}
          </div>
          <p className='text-sm text-gray-400 mb-3 lg:text-center text-start'><span className='font-semibold'>Result :</span> {project.result} </p>
          <div className='mt-5 flex gap-5 justify-between'>
            <Link target='_blank' className='bg-teal-500 rounded-xl px-4 py-2 text-sm text-white font-medium hover:scale-105 transition-transform duration-300' to={project.code}> GitHub Code </Link>
            <Link target='_blank' className='bg-gradient-to-r from-teal-500 to-blue-600 text-sm rounded-xl px-4 py-2 text-white font-medium hover:scale-105 transition-transform duration-300 ' to={project.live}> Live Demo </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectCards