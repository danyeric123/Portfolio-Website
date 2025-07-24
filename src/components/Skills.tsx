import skillsSection from "../data/skills.json";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SkillSection {
  section: string;
  content: SkillObject[];
}

interface SkillObject {
  name: string;
  link?: string;
  style?: {};
}

const Skills = () => {
  const generateGitHubUrl = (skill: string) => {
    return `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${skill}/${skill}.png`;
  };

  return (
    <section className="py-12 border-b border-border/30" id="skills">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="heading-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-3"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {(skillsSection as SkillSection[]).map((section, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {section.section}
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {section.content.map((skillObj, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium capitalize hover:bg-primary hover:text-primary-foreground transition-colors cursor-default flex items-center gap-2"
                  >
                    <Avatar className="w-4 h-4">
                      <AvatarImage
                        src={
                          "link" in skillObj
                            ? skillObj.link
                            : generateGitHubUrl(skillObj.name)
                        }
                        alt={skillObj.name}
                        style={"style" in skillObj ? skillObj.style : {}}
                      />
                      <AvatarFallback className="text-[8px] bg-muted">
                        {skillObj.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {skillObj.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
