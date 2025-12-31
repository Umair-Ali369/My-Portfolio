import React from "react";
import { motion } from "framer-motion";
import ProjectCards from "./ProjectCards";

const ProjectGrid = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex flex-col justify-center items-center p-24"
    >
      <div  className="flex flex-col justify-center items-start lg:items-center">
<h2 className="text-xl md:text-3xl lg:text-4xl text-gray-200 font-semibold mb-4">
        Projects That Defines My Growth
      </h2>
      <div className="lg:w-64 md:w-36 w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-600 mb-4"></div>
      <p className="text-xl text-gray-400 mb-4 lg:text-center text-start">
        Each project reflect my journey - from small practice builds to
        real-world inspired applications. I foucs on clean UI, efficient logic
        and user centered design
      </p>
      </div>
      
        <ProjectCards />
    </motion.section>
  );
};

export default ProjectGrid;
