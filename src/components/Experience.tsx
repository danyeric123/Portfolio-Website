interface ExperienceProps {
  experience: Experience;
}

interface Experience {
  companyName: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <>
      <div className="work__box">
        <div className="work__text">
          <h3>{experience.companyName}</h3>
          <h4>{experience.position}</h4>
          <h5>
            {experience.startDate} -{" "}
            {"endDate" in experience ? experience.endDate : "Present"}
          </h5>
        </div>
        <div className="work__image-box">
          {experience.description.map((description) => (
            <p>{description}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
