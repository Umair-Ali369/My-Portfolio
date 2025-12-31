import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import My_logo from "../assets/My_logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavBar } from "../Style/My_Portfolio_Style";
import my_Cv from "../../public/my_Cv.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={NavBar.mainNav}
      >
        {/* Logo left */}
        <Link className={NavBar.myLogoDiv} to='/'>
          <img src={My_logo} alt="My logo" className={NavBar.logo} />
          <span className={NavBar.mainName}>AliCodeTech</span>
        </Link>
        {/* links + CTA button right */}
        <div className={NavBar.mainDiv}>
          <NavLink to="/" className={NavBar.link}>
            Home
          </NavLink>
          <NavLink to="/about" className={NavBar.link}>
            About
          </NavLink>

          <NavLink to="/skills" className={NavBar.link}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={NavBar.link}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={NavBar.link}>
            Contact
          </NavLink>
            {/* <a
              className={NavBar.downloadCVBtn}
              href={my_Cv}
              download
              target="_blank"
            >
              Download CV
            </a> */}
        </div>

        {/* MObile menu */}
        <button
          className={NavBar.menuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={NavBar.menuMainDiv}
            >
              <NavLink
                to="/"
                className={NavBar.menuLinks}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={NavBar.menuLinks}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>

              <NavLink
                to="/skills"
                className={NavBar.menuLinks}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </NavLink>
              <NavLink
                to="/projects"
                className={NavBar.menuLinks}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={NavBar.menuLinks}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink>
                <button className={NavBar.menuCVBtn}>Download CV</button>
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
