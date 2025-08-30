import { Database, Zap, Cloud, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();
  
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
            {t('experience.title')}
          </h2>
          <div className="slide-up">
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {t('experience.description')}
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
              <h3 className="font-semibold text-foreground mb-4">{t('experience.industryTitle')}</h3>
              <p className="text-muted-foreground">
                {t('experience.industryDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};