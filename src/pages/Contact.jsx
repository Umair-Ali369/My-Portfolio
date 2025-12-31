import React from "react";
import { motion } from "framer-motion";
import ContactHeader from "../components/ContactComponents/ContactHeader";
import ContactFrom from "../components/ContactComponents/ContactFrom";
import ContactInfo from "../components/ContactComponents/ContactInfo";
import ContactCTA from "../components/ContactComponents/ContactCTA";

const Contact = () => {
  return (
    <main className="bg-[#0F172A] ">
      <motion.div 
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0, transition : {duration:.6}}}
      exit={{opacity:0, y:-30, transition:{duration:.4}}}
      className="p-24"
      >
        <div className="flex flex-col items-center justify-center h-[30vh] md:h-[50vh] lg:h-[70vh]">
          <h1 className="text-4xl sm:text-5xl md:text-8xl text-white font-bold tracking-widest mb-4 uppercase">
            Contact
          </h1>
          <div className="w-56 h-1 bg-gradient-to-r from-teal-400 to-blue-600"></div>
        </div>

        <ContactHeader />
        <div className="flex flex-col-reverse md:flex-row-reverse gap-8 justify-between items-center">
          <ContactFrom />
          <ContactInfo />
        </div>

        <ContactCTA />
      </motion.div>
    </main>
  );
};

export default Contact;
