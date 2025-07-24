import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="heading-gradient">Get in Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or explore collaboration
            opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-semibold text-foreground">
                        Let's talk
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Are you looking for a fast-performing and user-friendly
                      website to represent your product or business? Or looking
                      for any kind of consultation? Or want to ask questions?
                      The quickest way to reach out to me is via email.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="group">
                      <a href="mailto:dnagarpowers@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        dnagarpowers@gmail.com
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Visual element */}
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-primary/40 flex items-center justify-center">
                          <Mail className="h-16 w-16 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
