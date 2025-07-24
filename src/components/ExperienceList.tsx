import experiences from "../data/experiences.json";
import Experience from "./Experience";

const ExperienceList = () => {
  return (
    <section
      className="section-padding border-b border-border/30"
      id="experience"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="heading-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Building scalable solutions and leading technical initiatives across
            diverse domains
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            These highlights showcase key projects and achievements. For a
            comprehensive record of daily wins, detailed impact metrics,
            positive feedback, and professional growth beyond just work
            projects, visit my{" "}
            <a
              href="https://bragdocs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              professional achievements
            </a>{" "}
            documentation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Experience key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
