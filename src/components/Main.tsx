import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import BlogPostList from "./BlogPostList";
import ExperienceList from "./ExperienceList";

const Main = () => {
  return (
    <main role="main" className="relative">
      <div className="space-y-0">
        <ExperienceList />
        <BlogPostList />
        <Skills />
        <Projects />
        <About />
      </div>
    </main>
  );
};

export default Main;
