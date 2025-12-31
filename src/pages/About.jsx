import React from 'react'
import AboutIntro from '../components/AboutComponents/AboutIntro'
import Journey from '../components/AboutComponents/Journey'
import VisionMisson from '../components/AboutComponents/VisionMisson'
import CallToAction from '../components/AboutComponents/CallToAction'
// import TechExpertise from '../components/AboutComponents/TechExpertise'

const About = () => {
  return (
    <main className='bg-[#0F172A]'>
     <AboutIntro/>
     <Journey/>
     {/* <TechExpertise/> */}
     <VisionMisson/>
     <CallToAction/>
    </main>
  )
}

export default About