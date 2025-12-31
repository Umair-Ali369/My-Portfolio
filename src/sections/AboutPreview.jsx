import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { About } from "../Style/My_Portfolio_Style";

const AboutPreview = () => {
  return (
    <section className={About.mainSection}>
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className={About.mainDiv}
      >
        <h2 className={About.primaryHeading}>
          About Me
        </h2>
        <div className={About.headingBottomLine}></div>
        <h4 className={About.secondaryHeading}>
          A Passionate Frontend Developer & Lifelong Learner
        </h4>
        <p className={About.description}>
          I believe great things are build one line of code at a time. My
          mission is to grow every day, challenge myself with new technologies,
          and build projects that make an impact in the real world. As a
          self-taught Frontend Developer, I focus on turning ideas into
          interactive, visually stunning digital experiences — while
          continuouslly pushing my limits to reach new hights.
        </p>
        <Link to="/about">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(94,234,212,.2)",
            }}
            className={About.learnMoreBtn}
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutPreview;
