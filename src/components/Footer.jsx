import React from "react";
import { Link } from "react-router-dom";
import My_logo from "../assets/My_logo.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import { FooterStyle } from "../Style/My_Portfolio_Style";

const Footer = () => {
  return (
    <footer className={FooterStyle.mainFooter}>
      <div className={FooterStyle.mainDiv}>
        {/* Brand name and profession */}
        <div className={FooterStyle.logoDiv}>
          <img src={My_logo} alt="My logo" className={FooterStyle.logo} />
          <h3 className={FooterStyle.name}>Ali Khan</h3>
          <h4 className={FooterStyle.profession}>Frontend Developer</h4>
        </div>

        {/* Quick Links */}
        <div className={FooterStyle.linksDiv}>
          <ul className={FooterStyle.linksList}>
            <li>
              <Link to="/" className={FooterStyle.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={FooterStyle.link}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className={FooterStyle.link}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className={FooterStyle.link}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={FooterStyle.link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* social icons & links */}
        <div className="flex flex-col items-start justify-center">
          <div className="grid grid-cols-2 text-xl text-gray-400 md:gap-8 lg:gap-10 gap-3 mx-auto mb-4">
            <a
              href="https://github.com/Umair-Ali369"
              target="_blank"
              rel="noopener noreferrer"
              className={FooterStyle.socialLink}
            >
              <FaGithub size={35} />
            </a>
            <a
              className={FooterStyle.socialLink}
              href="https://www.linkedin.com/in/ali-techcode-a54153395/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              className={FooterStyle.socialLink}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alitechcode@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={35} />
            </a>
          </div>
        </div>
      </div>
      <p className={FooterStyle.line}>
        &copy; {new Date().getFullYear()} Ali Khan - All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
