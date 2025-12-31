import React from "react";
import { easeIn, motion } from "framer-motion";
import { Link } from "react-router-dom";
import my_image from '../assets/my_image.png'
import { heroSection } from "../Style/My_Portfolio_Style";

const Hero = () => {
  return (
    <section className={heroSection.mainSection}>
      {/* textual section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={heroSection.texualSection}
      >
        <h1 className={heroSection.heading}>
          Hi, I'm{" "}
          <span className={heroSection.name}>
            Umair Ali{" "}
          </span>{" "}
          👋
        </h1>

        <h4 className={heroSection.subHeading}>
          Frontend Developer & Tech Visionary
        </h4>
        <p className={heroSection.description}>
          I craft modern, responsive, and animated web experiences that blend
          clean design with powerfull functionality. Passionate about React,
          Tailwind, and creating interfaces that inspire trust action
        </p>
        <motion.div
          className={heroSection.BtnDiv}
          transition={{ delay: 0.6 }}
        >
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(94,234,212,.2)",
              }}
              className={heroSection.hireBtn}
            >
              Hire Me
            </motion.button>
          </Link>
          <Link to="/projects">
            <button className={heroSection.viewProjectsBtn}>
              View Projects
            </button>
          </Link>
        </motion.div>
      </motion.div>
      {/* Image section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={heroSection.imageSection}
      >
        <img
          src={my_image}
          alt="Image"
          className={heroSection.image}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
