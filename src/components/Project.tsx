import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, AlertCircle } from "lucide-react";

interface ProjectProps {
  project: ProjectObject;
  index: number;
}

interface ProjectObject {
  title: string;
  description: string;
  technologies: string[];
  link: { url: string; live: boolean };
  github_link: string;
  image: { link: string };
}

const Project = ({ project, index }: ProjectProps) => {
  const isEven = index % 2 === 0;

  return (
    <Card className="project-card group overflow-hidden">
      <CardContent className="p-0">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } min-h-[400px]`}
        >
          {/* Project Image */}
          <div className="lg:w-1/2 relative overflow-hidden bg-muted/30">
            <img
              src={project.image.link}
              alt={`${project.title} preview`}
              className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = "/images/project-placeholder.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden"></div>
          </div>

          {/* Project Content */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
            <div className="space-y-4">
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {project.link.live ? (
                  <Button asChild className="group/btn">
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button disabled variant="secondary" className="group/btn">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Demo Unavailable
                  </Button>
                )}

                <Button variant="outline" asChild>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
