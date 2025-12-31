import React from "react";
import { motion } from "framer-motion";
import Underline from '../Other/Underline'
import { JourneySection } from "../../Style/My_Portfolio_Style";

const Journey = () => {
  return (
    <section className={JourneySection.mainSection}>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      
      className={JourneySection.mainDiv}>
        <h1 className={JourneySection.mainHeading}>
          My Journey
        </h1>
        <Underline/>
        <motion.div 
        initial={{opacity:0, y:50}}
        transition={{duration:0.8}}
        whileInView={{opacity:1, y:0}}
        className={JourneySection.journeyGrid}>
          {[
            {
              year: "2024",
              learning: "Started learning HTML, CSS, and JavaScirpt",
              desc: "Understanding how the web connecting people",
            },
            {
              year: "2025 Middle",
              learning: "Learning React & Tailwind CSS",
              desc: "Mastering component-based-development",
            },
            {
              year: "2025 Current",
              learning: "Dived into Backend Development",
              desc: "Backend with Node.js, APIs, and full stact integration",
            },
          ].map((learn, index) => (
            <div
              className={JourneySection.JDiv}
              key={index}
            >
              <h3 className={JourneySection.year}>
                
                {learn.year}
              </h3>
              <h5 className={JourneySection.learning}>
                {learn.learning}
              </h5>
              <p className={JourneySection.description}> {learn.desc} </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Journey;
