import React from "react";
import { motion } from 'framer-motion'
import Underline from '../Other/Underline'
import { skillHeader } from "../../Style/My_Portfolio_Style";

const SkillsHeader = () => {
  return (
    <motion.section 
    initial={{opacity:0, scale:0.95}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:.5, delay:.2}}
    className="p-24 ">
      <div className={skillHeader.mainDiv}>
        <h2 className={skillHeader.mainHeading}>  Tech Expertise</h2>
        <Underline/>
        <h4 className={skillHeader.subHeading}>Building the future, one stact at a time</h4>
        <p className={skillHeader.description}>I'm Ali Khan — who belive in mastering every layer of the web. From crafting pixel-perfect interfaces to structure powerful backend, my goal in to turn complex ideas into clean, functioal, and high performence digital products</p>
        
      </div>
    </motion.section>
  );
};

export default SkillsHeader;
