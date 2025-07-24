import Project from "./Project";
import projects from "../data/projects.json";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Github, FileBarChart } from "lucide-react";

const Projects = () => {
  return (
    <section
      className="section-padding border-b border-border/30"
      id="projects"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="heading-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Early career projects and learning experiments
          </p>

          {/* Prominent disclaimer card */}
          <Card className="max-w-4xl mx-auto mb-8 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-left space-y-3">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    <strong>Portfolio Context:</strong> These represent early
                    career projects and some personal experiments I remembered
                    to showcase here.
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Most of my professional work is either available on{" "}
                    <a
                      href="https://github.com/danyeric123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline font-medium gap-1"
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                    </a>{" "}
                    or is confidential work done for various companies. For
                    detailed insights into my professional contributions,
                    impact, and recent work, please visit my{" "}
                    <a
                      href="https://bragdocs.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline font-medium gap-1"
                    >
                      <FileBarChart className="h-3 w-3" />
                      professional achievements
                    </a>{" "}
                    documentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
