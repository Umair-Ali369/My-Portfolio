import React from "react";
import Hero from "../sections/Hero";
import AboutPreview from "../sections/AboutPreview";
import SkillsPreview from "../sections/SkillsPreview";
import ProjectsPreview from "../sections/ProjectsPreview";
import Contact from "./Contact";
import ContactPreview from "../sections/ContactPreview";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <main>
        <Hero />
        <AboutPreview />
        <SkillsPreview />
        <ProjectsPreview />
        <ContactPreview />
      </main>
    </div>
  );
};

export default Home;
