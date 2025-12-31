import React from 'react'
import { motion} from 'framer-motion'
import Underline from '../Other/Underline'
import { Vision_Mission } from '../../Style/My_Portfolio_Style'

const VisionMisson = () => {
  return (
    <section className={Vision_Mission.mainSection}>
        <motion.div 
        initial={{opacity:0 }}
        transition={{duration:1}}
        whileInView={{opacity:1}}
        className={Vision_Mission.mainDiv}>
            <h2 className={Vision_Mission.mainHeading}>Vission & Mission</h2>
            <Underline/>
            <div className={Vision_Mission.subDiv}>
                <div className={Vision_Mission.Divs}>
                    <h3 className={Vision_Mission.Headings}> 🌟 Vission</h3>
                    <p className="text-xl text-gray-400">
                        To build technology-driven busniesses that inspire growth, connect people, and improve how the world works
                    </p>
                </div>
                <div className={Vision_Mission.Divs}>
                    <h3 className={Vision_Mission.Headings}> 💪 Mission</h3>
                    <p className="text-xl text-gray-400">
                        To keep learning, stay disciplined, and create meaningful projects that lead me to become a tech entrepreneur and future billionaire
                    </p>
                </div>

            </div>
        </motion.div>
    </section>
  )
}

export default VisionMisson