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
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <>
      <div className="work__box">
        <div className="work__text">
          {"companyWebsite" in experience ? (
            <a href={experience.companyWebsite} className="link__text">
              <h3>{experience.companyName}</h3>
            </a>
          ) : (
            <h3>{experience.companyName}</h3>
          )}
          <h4>{experience.position}</h4>
          <h5>
            {experience.startDate} -{" "}
            {"endDate" in experience ? experience.endDate : "Present"}
          </h5>
        </div>
        <div
          className="work__image-box"
          style={{
            border: "inset rgba(175, 171, 173, 0.3)",
            padding: "2rem",
            borderRadius: "10%",
          }}
        >
          {experience.description.map((description) => (
            <p>{description}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
