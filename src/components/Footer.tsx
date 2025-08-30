import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{t('hero.title')}</h3>
            <p className="text-primary-foreground/80">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} {t('hero.title')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};