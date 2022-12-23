import React from "react";
import About from "./About";
import SkillTitle from "./SkillTitle";
import Skills from "./Skills";
import Projects from "./Projects";
import BlogPostList from "./BlogPostList";
import Tutorials from "./Tutorials";

const Main = () => {
  return (
    <main role="main">
      <Skills />
      <BlogPostList />
      <Projects />
      <Tutorials />
      <About />
    </main>
  );
};

export default Main;
