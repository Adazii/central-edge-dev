import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full p-1 card-shadow">
      <Globe className="w-4 h-4 text-muted-foreground ml-2" />
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 text-xs font-medium rounded-full"
      >
        EN
      </Button>
      <Button
        variant={language === 'sv' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('sv')}
        className="h-8 px-3 text-xs font-medium rounded-full mr-1"
      >
        SV
      </Button>
    </div>
  );
};