import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, FileBarChart } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding border-b border-border/30" id="about">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="heading-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Results-driven{" "}
                <span className="text-foreground font-medium">
                  Software Engineer
                </span>{" "}
                with expertise in distributed systems, microservices
                architecture, and cloud infrastructure.
              </p>
              <p>
                Demonstrated success in improving system performance, reducing
                latency, and implementing robust observability solutions with a
                strong track record of mentoring teams and driving
                cross-functional collaboration.
              </p>
              <p>
                I build{" "}
                <span className="text-primary font-medium">
                  scalable solutions
                </span>{" "}
                using Python, Golang, and cloud technologies, with a passion for
                creating systems that make a difference.
              </p>
              <p>
                Beyond technical skills, I believe in{" "}
                <span className="text-foreground font-medium">
                  continuous growth
                </span>{" "}
                and maintain a comprehensive record of my professional
                journey—tracking major milestones, daily wins, feedback
                received, and skills developed both at work and beyond,
                following Julia Evans'
                <a
                  href="https://jvns.ca/blog/brag-documents/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium mx-1"
                >
                  brag document approach
                </a>
                for career development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <a
                  href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1hXFOEohHJPBt_1epZxVALm-Z52m2Ifux/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View My Resume
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
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

          {/* Photo */}
          <div className="order-1 lg:order-2">
            <Card className="glass-card overflow-hidden max-w-md mx-auto">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="./images/professional_photo.jpg"
                    alt="David Nagarpowers - Professional Photo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
