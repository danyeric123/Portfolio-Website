interface ProjectProps {
  project: ProjectObject;
}

interface ProjectObject {
  title: string;
  description: string;
  technologies: string[];
  link: { url: string; live: boolean };
  github_link: string;
  image: { link: string };
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="work__box">
      <div className="work__text">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="work__list">
          {project.technologies.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div className="work__links">
          {project.link.live ? (
            <a href={project.link.url} target="_blank" className="link__text">
              Visit Browser Version <span>&rarr;</span>
            </a>
          ) : (
            <div className="deactivated"> Heroku Down</div>
          )}
          <a
            href={project.github_link}
            title="View Source Code"
            target="_blank"
          >
            <img
              src="./images/github.svg"
              className="work__code"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
      <div className="work__image-box">
        <img
          width="600px"
          src={project.image.link}
          className="work__image"
          alt={`${project.title}_img`}
        />
      </div>
    </div>
  );
};

export default Project;
