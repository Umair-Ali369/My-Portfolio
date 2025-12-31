import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaLocationArrow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <section className="flex flex-col items-start justify-start p-2 gap-4 border rounded-xl w-[98%] " >
      <div className=" w-full p-2 text-gray-300 ">
        <div className="text-teal-400 pb-3">
          {" "}
          <MdEmail size={40} />{" "}
        </div>
        <label className="text-2xl font-semibold text-gray-200">
          {" "}
          Email :{" "}
        </label>
        <a
          className="text-2xl md:text-xl text-gray-400 hover:underline tracking-wider"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=alitechcode@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact via Email
        </a>
      </div>
      <div className=" w-full px-2 py-4 text-gray-300 ">
        <div className="text-teal-400 pb-3">
          {" "}
          <FaLinkedinIn size={40} />{" "}
        </div>
        <label className="text-2xl font-semibold text-gray-200">
          {" "}
          LinkedIn :{" "}
        </label>
        <a className=" text-gray-400 hover:underline tracking-wider text-2xl md:text-xl" href="https://www.linkedin.com/in/ali-techcode-a54153395/"
         target="_blank"
          rel="noopener noreferrer"
         >
          Linkdin link
        </a>
      </div>
      <div className=" w-full px-2 py-4 text-gray-300 ">
        <div className="text-teal-400 pb-3">
          {" "}
          <FaGithub size={40} />{" "}
        </div>
        <label className="text-2xl font-semibold text-gray-200">
          {" "}
          GitHub :{" "}
        </label>
        <a className=" text-gray-400 hover:underline tracking-wider text-2xl md:text-xl" 
        href="https://github.com/Umair-Ali369"
        target="blank"
        rel="noopener noreferrer"
        >
          GitHub link
        </a>
      </div>
      <div className=" w-full px-2 py-4 text-gray-300 ">
        <div className="text-teal-400 p-3">
          {" "}
          <FaLocationArrow size={40} />{" "}
        </div>
        <label className="text-2xl font-semibold text-gray-200">
          {" "}
          Location :{" "}
        </label>
        <Link className=" text-gray-400 tracking-wider text-2xl md:text-xl">
          Pakistan (Available Worldwide)
        </Link>
      </div>
    </section>
  );
};

export default ContactInfo;
