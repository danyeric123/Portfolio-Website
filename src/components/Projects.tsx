import Project from "./Project";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section className="work" id="projects">
      <div className="row">
        <h2>Projects</h2>
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
