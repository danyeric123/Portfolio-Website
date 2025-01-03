import React from "react";
import About from "./About";
import SkillTitle from "./SkillTitle";
import Skills from "./Skills";
import Projects from "./Projects";
import BlogPostList from "./BlogPostList";
import Tutorials from "./Tutorials";
import ExperienceList from "./ExperienceList";

const Main = () => {
  return (
    <main role="main">
      <ExperienceList />
      <BlogPostList />
      <Skills />
      <Projects />
      <About />
    </main>
  );
};

export default Main;
