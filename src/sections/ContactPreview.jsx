import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Contact } from "../Style/My_Portfolio_Style";

const ContactPreview = () => {
  return (
    <section className={Contact.mainSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className={Contact.mainDiv}
      >
        <h2 className={Contact.heading}>
          Let's Connect
        </h2>
        <p className={Contact.description}>
          Have a project or idea in mind? Let's build something meaningful
          together. I'm open to freelance work, collaboration, and exciting
          opportunities
        </p>
        <div className={Contact.btnsDiv}>
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(94,234,212,.2)",
              }}
              className={Contact.contactBtn}
            >
              Contact Me
            </motion.button>
          </Link>
          <Link to="/contact">
            <button className={Contact.hireBtn}>Hire Me</button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPreview;
