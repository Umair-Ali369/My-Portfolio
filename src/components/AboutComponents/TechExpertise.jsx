import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TechExpertise = () => {
  return (
    <section className="bg-[#0F172A] p-24">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl md:text-5xl text-white mb-4 font-bold">
          Tech Expertise
        </h1>
        <div className="w-24 mx-auto h-1 bg-gradient-to-r from-teal-400 to-blue-600 mb-4"></div>
        <p className="text-xl md:text-2xl text-teal-400 font-semibold mb-4">
          My current tookit focuses on building clean, responsive, and
          interactive experience:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Frontend",
              toolkit: ["HTML", "Javascript", "React"],
              icons: [FaHtml5 , FaCss3 , FaJs , FaReact ],
            },
            {
              title: "Backend(in progress)",
              toolkit: ["Node.js", "Express", "MongoDB"],
              icons: [FaNodeJs , SiExpress , SiMongodb ],
            },
            {
              title: "Tools",
              toolkit: ["Git", "VS Code", "TailwindCSS"],
              icons: [FaGitAlt , VscVscode , SiTailwindcss ],
            },
          ].map((expertise, index) => (
            <div className="flex justify-cente  items-center" key={index}>
              <div className="bg-[#1E293B] rounded-md">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-200 my-3"> {expertise.title} </h3>
                <div> 

                    <div className="flex my-4">
                      {expertise.toolkit.map((tool, index) => (
                        <span 
                        className=" hover:bg-teal-800 mx-4 border hover:border-teal-600 text-gray-400  rounded-xl px-3"
                        key={index}> {tool} </span>
                      ))}
                      
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;
