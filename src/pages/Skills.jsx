import React from "react";
import SkillsHeader from "../components/SkillsComponents/SkillsHeader";
import SkillsGrid from "../components/SkillsComponents/SkillsGrid";
import LearningPath from "../components/SkillsComponents/LearningPath";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <main className="bg-[#0F172A]">
      <motion.div
      initial={{opacity:0, y:40}}
      animate={{opacity:1, y:0}}
      transition={{duration:.6, ease:"easeOut"}}
      className="p-24"

      >
        <div className="flex flex-col items-center justify-center h-[30vh] md:h-[50vh] lg:h-[70vh]">
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-widest mb-5 uppercase">
            Skills
          </h1>
          <div className="w-52 h-1 bg-gradient-to-r from-teal-400 to-blue-600"></div>
        </div>
        <SkillsHeader />
        <SkillsGrid />
        <LearningPath />
        <p className="px-7 italic pb-20 text-2xl text-center text-teal-300 font-semibold">
          "From Frontend fineses to Backend power - I'm building skills that
          connect everything together"
        </p>
      </motion.div>
    </main>
  );
};

export default Skills;
