import React from "react";
import { motion } from "framer-motion";
import my_image from '../../assets/my_image.png'
import { AboutIntroduction } from "../../Style/My_Portfolio_Style";

const AboutIntro = () => {
  return (
    <section className={AboutIntroduction.mainSection}>
      {/* text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={AboutIntroduction.Div1}
      >
        <h1 className={AboutIntroduction.mainHeading}>
          About Me
        </h1>
        <div className={AboutIntroduction.bottomLine}></div>
        <h4 className={AboutIntroduction.subHeading}>
          Hi, I'm Ali Khan — a passionate Frontend Developoer & Future
          Innovaotor
        </h4>
        <p className={AboutIntroduction.description}>
          I'm learning every day to master React, Node, and Full-stact
          Development, with a dream to build a futuristic products that connect
          people & technology. I believe in consistency, creativity, and hard
          work — because great things take time and courage.
        </p>
      </motion.div>
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={AboutIntroduction.Div2}
      >
        <img
          src={my_image}
          alt="My Image"
          className={AboutIntroduction.image}
        />
      </motion.div>
    </section>
  );
};

export default AboutIntro;
