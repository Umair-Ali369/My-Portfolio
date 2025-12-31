import React from "react";
import { motion } from "framer-motion";

const LearningPath = () => {
  return (
    <section className="p-24">
      <motion.div 
      initial={{opacity:0, x:-40}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:.6, delay : .3}}
      className="flex flex-col items-start md:items-center justify-center">
        <h2 className="text-3xl md:text-5xl text-gray-200 font-semibold mb-4">
          Continous Growth & Future Vision
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-600 mb-4"></div>
        <p className="text-xl text-teal-400 max-w-3xl md:text-center mb-5">
          Learning never stop - I'm constantly exporing new tools to enhance my
          ability to build complete, scalable system. My path is driven by
          curiosity, experimentation, and consistent progress
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto p-4 max-w-3xl">
          {[
            {
              step: "Current Learning :",
              text: "Matering Node.js & Express.js to strengthen backend logic and API design ",
            },
            {
              step: "Next Step :",
              text: "Integrating MongoDB and React to craft fully functional full-stack-applications",
            },
            {
              step: "Upcoming Goal :",
              text: "Deploying and managing projects on platforms like Vercel or Render",
            },
            {
              step: "Future Vision",
              text: "Launching my own tech company,tech projects & collaborating with global companies",
            },
          ].map((learning, index) => (
            <div className=" p-6 m-4">
              <ol className="list-disc">
                <li className="text-gray-400">
                  <span className="text-xl text-gray-200 font-semibold"> {learning.step} </span> {learning.text}
                </li>
              </ol>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LearningPath;
