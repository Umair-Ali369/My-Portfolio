import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Underline from "../Other/Underline";
import { AboutCTA } from "../../Style/My_Portfolio_Style";

const CallToAction = () => {
  return (
    <section className={AboutCTA.mainSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={AboutCTA.mainDiv}
      >
        <h2 className={AboutCTA.mainHeading}>
          Call To Action
        </h2>
        <Underline />
        <p className={AboutCTA.text1}>
          Ready to collaboreate or hire me for your next project?
        </p>
        <p className={AboutCTA.text2}>
          I'm always open to work, partnership, or creative opportunities
        </p>
        <div className={AboutCTA.btnDiv}>
          {/* <a 
          href={my_Cv}
          download
          target="_blank"
          >
            <button className={AboutCTA.cvBtn}>
              Download CV
            </button>
          </a> */}
          <Link to="/contact">
            <button className={AboutCTA.hireBtn}>
              Hire Me
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
