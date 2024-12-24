import React from "react";

interface ExperienceProps {
  experience: Experience;
}

interface Experience {
  companyName: string;
  companyWebsite?: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  projects?: Project[];
}

interface Project {
  client: string;
  title: string;
  details: string[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="experience__box">
      <div className="experience__text">
        {experience.companyWebsite ? (
          <a href={experience.companyWebsite} className="link__text">
            <h3>{experience.companyName}</h3>
          </a>
        ) : (
          <h3>{experience.companyName}</h3>
        )}
        <h4>{experience.position}</h4>
        <h5>
          {experience.startDate} - {experience.endDate ? experience.endDate : "Present"}
        </h5>
      </div>
      <div className="experience__description">
        <ul>
          {experience.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        {experience.projects && (
          <div className="experience__projects">
            {experience.projects.map((project, index) => (
              <div key={index} className="project">
                <h5>{project.client}</h5>
                <h6>{project.title}</h6>
                <ul>
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;