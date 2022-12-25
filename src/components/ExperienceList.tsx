import experiences from "../data/experiences.json";
import Experience from "./Experience";

const ExperienceList = () => {
  return (
    <section className="work" id="experience">
      <div className="row">
        <h2>Experience</h2>
        <div className="work__boxes">
          {experiences.map((experience) => (
            <Experience experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
