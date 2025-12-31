import React from "react";
import { Link } from 'react-router-dom'
import  { motion } from 'framer-motion'
import Underline from '../Other/Underline'
import { skillgrid } from "../../Style/My_Portfolio_Style";

const SkillsGrid = () => {
  return (
    <section className="p-24">
      <motion.div 
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:.4, delay:.2}}
      className={skillgrid.mainDiv}>
        <h2 className={skillgrid.mainHeading}>
          Tech Stack Overview
        </h2>
        <Underline />
        <p className={skillgrid.description}>Here's the toolkit I use to design, develop, and deliver digital experience that perform beautifully across all devices</p>
        
        
        <div className={skillgrid.SGrid}>

          {[
            {
              skill : "HTML5",
              text : "The foundation of every clean & accessible web experience I create"
            },
            {
              skill : "CSS3 / TailwindCSS",
              text : "Styling interfaces with speed, precision , and responsive design principle"
            },
            {
              skill : "Javascript (ES6+)",
              text : "Adding interactivity, logic and layer of innovation to every project"
            },
            {
              skill : "React JS",
              text : "Building modular, scalable and lightning-fast usesr interfaces"
            },
            {
              skill : "Node.js & Express",
              text : "Powering backend logic, APIs, and real time web capabilities"
            },
            {
              skill : "MongoDB",
              text : "Managing structured data efficiency to support full-stack applications"
            }
            // {
            //   skill : "Framer Motion",
            //   text : "Enhancing UX with elegant motion and visual storytelling"
            // }
          ].map((Skills, index)=> (
            <motion.div 
            whileHover={{scale:1.05,boxShadow: "0px 0px 10px rgba(94,234, 212 , 0.4)"}}
            transition={{type:"spring", stiffness:200}}
            key={index}
            className={skillgrid.skillDiv}>
              <h3 className={skillgrid.skillHeading}> {Skills.skill} </h3>
              <p className={skillgrid.skillDescription}> {Skills.text} </p>
            </motion.div>
          ))}
        </div>
        <p className={skillgrid.finishLine}>Every techology I learn is a new tool to express creativity & solve problems samrter</p>
         <Link to="/projects">
            <button className={skillgrid.Btn}>
              View My Projects
            </button>
          </Link>
      </motion.div>
    </section>
  );
};

export default SkillsGrid;
