import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Skill } from "../Style/My_Portfolio_Style";

const SkillsPreview = () => {
  return (
    <section id="skills" className={Skill.mainSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className={Skill.mainDiv}
      >
        {/* heading */}
        <h2 className={Skill.primaryHeading}>
          Core Skills & Expertise
        </h2>
        {/* landing lines */}
        <div className={Skill.bottomLine}></div>
        {/* subheading */}
        <h4 className={Skill.secondaryHeading}>
          Techonologies I Use to Craft Motion Web Interfaces
        </h4>
        {/* description */}
        <p className={Skill.description}>
          Here's a quick look at some of the tools & technologies I work with
          every day to buid sleek, resposive, and high performing web apps
        </p>
        {/* Skills gird */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={Skill.skillGrid}
        >
          {["React", "TailwindCss", "Javascript", "HTML", "CSS"].map(
            (skill) => (
              <span
                key={skill}
                className={Skill.skill}
              >
                {skill}
              </span>
            )
          )}
        </motion.div>
        <Link to="/skills">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(94,234,212,.2)",
            }}
            className={Skill.btn}
          >
            View All Skills →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default SkillsPreview;
