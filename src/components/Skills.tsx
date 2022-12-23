import skillsSection from "../data/skills.json";
import SkillTitle from "./SkillTitle";

interface SkillSection {
  sectionTitle: string;
  skillObj: SkillObject[];
}

interface SkillObject {
  name: string;
}

const Skills = () => {
  const generateGitHubUrl = (skill: string) => {
    return `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${skill}/${skill}.png`;
  };

  return (
    <section className="skills" id="skills">
      <div className="row">
        <h2>Skills</h2>
        {skillsSection.map((section) => (
          <>
            <h3>{section["section"]}</h3>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {section["content"].map((skillObj) => (
                <div className="client-logos">
                  <SkillTitle
                    badgeUrl={generateGitHubUrl(skillObj.name)}
                    style={"style" in skillObj ? skillObj.style : {}}
                  />
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Skills;
