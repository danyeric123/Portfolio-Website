import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, FileBarChart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        role="contentinfo"
        className="border-t border-border/30 bg-background/50 backdrop-blur-sm"
      >
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Branding and copyright */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                David Nagarpowers
              </h3>
              <p className="text-muted-foreground">
                &copy; {new Date().getFullYear()} - Template styling by{" "}
                <a
                  href="https://nisar.dev"
                  className="text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nisar
                </a>
                . Built with modern tech stack.
              </p>
            </div>

            {/* Right side - Professional links */}
            <div className="flex justify-center md:justify-end">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/danyeric123"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>

                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/david-nagarpowers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>

                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://bragdocs.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Professional Achievements & Impact Documentation"
                  >
                    <FileBarChart className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Back to Top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </>
  );
};

export default Footer;
