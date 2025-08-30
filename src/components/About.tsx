import { User, Award, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading font-bold mb-8 text-foreground slide-up">
            {t('about.title')}
          </h2>
          <div className="slide-up">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <User className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('about.experience')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.experienceDesc')}</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('about.certified')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.certifiedDesc')}</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('about.allSizes')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.allSizesDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};