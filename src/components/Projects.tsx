import Project from "./Project";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section className="work" id="projects">
      <div className="row">
        <h2>Projects</h2>
        <p className="preceding-text">
          These are some of my projects. Much of my work can be found on my{" "}
          <a
            href="https://github.com/danyeric123"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          or cannot be shared because it was done at work.
        </p>
        {projects.map((project) => (
          <>
            <Project project={project} />
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
