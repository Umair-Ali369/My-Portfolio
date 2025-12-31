import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectsP } from "../Style/My_Portfolio_Style";

const ProjectsPreview = () => {
  return (
    <section className={ProjectsP.mainSection}>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={ProjectsP.mainDiv}
      >
        {/* heaidng */}
        <h2 className={ProjectsP.primaryHeading}>
          My Projects
        </h2>
        <div className={ProjectsP.bottomLine}></div>
        {/* subheading */}
        <h4 className={ProjectsP.secondaryHeading}>
          A few of favorite works tunning ideas into functional, beautiful web
          apps
        </h4>
        {/* project grid */}
        <div className={ProjectsP.projectsGrid}>
          {[
            {
              title: "Samrt Notes App",
              desc: "A simple & responsive notes app build with react & local storage",
              tags: ["React", "Tailwind", "LocalStorage"],
            },
            {
              title: "Personal Portfolio",
              desc: "A modern portfolio website build to showcase skills, projects, and experience ",
              tags: ["React", "Framer Motion", "Tailwind"],
            },
            {
              title: "Modern Blog Website",
              desc: "A clean & dynamic blog website fetching data form fake API",
              tags: ["React", "API", "Routing"],
            },
          ].map((project, index) => (
            <div
              className={ProjectsP.projectDiv}
              key={index}
            >
              <h3 className={ProjectsP.projectTitle}>
                {project.title}
              </h3>
              <p className={ProjectsP.projectDesc}> {project.desc} </p>
              <div className={ProjectsP.tagsDiv}>
                {project.tags.map((tag, index) => (
                  <span
                    className={ProjectsP.tag}
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(94,234,212,.2)",
            }}
            className={ProjectsP.btn}
          >
            View All Projects →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectsPreview;
