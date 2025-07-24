import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ExperienceProps {
  experience: Experience;
  index: number;
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

const Experience = ({ experience, index }: ExperienceProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10"></div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 ${
          isEven ? "md:pr-12" : "md:pl-12"
        } ml-16 md:ml-0`}
      >
        <Card className="experience-card group">
          <CardContent className="p-0">
            <div className="p-6">
              {/* Company and Position */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    {experience.companyWebsite ? (
                      <a
                        href={experience.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
                      >
                        {experience.companyName}
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.companyName}
                      </h3>
                    )}
                    <h4 className="text-lg font-medium text-primary mt-1">
                      {experience.position}
                    </h4>
                  </div>
                </div>

                <Badge variant="secondary" className="text-xs">
                  {experience.startDate} - {experience.endDate || "Present"}
                </Badge>
              </div>

              {/* Description */}
              <div className="space-y-3 mb-6">
                {experience.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Projects */}
              {experience.projects && experience.projects.length > 0 && (
                <div className="space-y-4">
                  <h5 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Key Projects
                  </h5>
                  {experience.projects.map((project, projectIdx) => (
                    <div
                      key={projectIdx}
                      className="border-l-2 border-primary/30 pl-4 py-2"
                    >
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs mb-1">
                          {project.client}
                        </Badge>
                        <h6 className="font-medium text-sm text-foreground">
                          {project.title}
                        </h6>
                      </div>
                      <div className="space-y-2">
                        {project.details.map((detail, detailIdx) => (
                          <div
                            key={detailIdx}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Empty space for the other side on desktop */}
      <div className="hidden md:block w-1/2"></div>
    </div>
  );
};

export default Experience;
