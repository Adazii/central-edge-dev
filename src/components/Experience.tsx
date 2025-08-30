import { Database, Zap, Cloud } from "lucide-react";

export const Experience = () => {
  const technologies = [
    { icon: Database, name: "Dynamics 365" },
    { icon: Code, name: "AL Language" },
    { icon: Zap, name: "Power Platform" },
    { icon: Cloud, name: "Azure Integration" }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading font-bold mb-8 text-foreground slide-up">
            Experience & Technologies
          </h2>
          <div className="slide-up">
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Throughout my career, I've delivered diverse solutions across multiple industries, 
              working with the full Microsoft technology stack. From legacy NAV migrations to 
              cutting-edge cloud implementations, I bring deep technical knowledge and 
              practical experience to every project.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group text-center fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-smooth group-hover:scale-105">
                    <tech.icon className="w-10 h-10 text-primary" />
                  </div>
                  <p className="font-medium text-foreground text-sm">{tech.name}</p>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 text-left">
              <h3 className="font-semibold text-foreground mb-4">Industry Experience</h3>
              <p className="text-muted-foreground">
                Manufacturing, retail, professional services, and technology sectors. 
                Experience with both greenfield implementations and complex legacy system 
                migrations, always focusing on scalable, maintainable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fix import for Code icon
import { Code } from "lucide-react";