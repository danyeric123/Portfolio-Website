import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileBarChart } from "lucide-react";

const Byline = () => {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
      <div className="space-y-6">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
          <span className="block text-foreground">David</span>
          <span className="block heading-gradient">Nagarpowers</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-light">
          A Software Engineer based in{" "}
          <span className="text-primary font-medium">New York, NY</span>
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Building scalable solutions with expertise in distributed systems,
          microservices architecture, and cloud infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <Button size="lg" className="group" onClick={handleContactClick}>
            <Mail className="mr-2 h-4 w-4" />
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a
              href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1hXFOEohHJPBt_1epZxVALm-Z52m2Ifux/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>

          <Button size="lg" variant="secondary" asChild>
            <a
              href="https://bragdocs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileBarChart className="mr-2 h-4 w-4" />
              Professional Achievements
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Byline;
