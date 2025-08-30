import { User, Award, Building } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading font-bold mb-8 text-foreground slide-up">
            About Adrian
          </h2>
          <div className="slide-up">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a Business Central developer with 3 years of specialized experience, 
              holding Microsoft certifications and having worked with both small startups 
              and large enterprises. My expertise spans the full range from NAV to 
              Business Central, covering both on-premise and cloud implementations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <User className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">3+ Years Experience</h3>
                <p className="text-sm text-muted-foreground">Dedicated Business Central development</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Microsoft Certified</h3>
                <p className="text-sm text-muted-foreground">Official Microsoft certifications</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">All Business Sizes</h3>
                <p className="text-sm text-muted-foreground">From startups to large enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};