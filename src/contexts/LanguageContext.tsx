import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero
    'hero.title': 'Central Edge',
    'hero.tagline': 'Smarter Business Central development',
    'hero.cta': 'Get in touch',

    // About
    'about.title': 'About Adrian',
    'about.description': "I'm a Business Central developer with 3 years of specialized experience, holding Microsoft certifications and having worked with both small startups and large enterprises. My expertise spans the full range from NAV to Business Central, covering both on-premise and cloud implementations.",
    'about.experience': '3+ Years Experience',
    'about.experienceDesc': 'Dedicated Business Central development',
    'about.certified': 'Microsoft Certified',
    'about.certifiedDesc': 'Official Microsoft certifications',
    'about.allSizes': 'All Business Sizes',
    'about.allSizesDesc': 'From startups to large enterprises',

    // Services
    'services.title': 'Services',
    'services.subtitle': 'Comprehensive Business Central solutions designed to optimize your operations',
    'services.extensions': 'Business Central Extensions',
    'services.extensionsDesc': 'AL development, custom reports, and specialized modules tailored to your business needs.',
    'services.integrations': 'Integrations',
    'services.integrationsDesc': 'Seamless API connections, Power Platform integration, and Dataverse synchronization.',
    'services.consulting': 'Consulting & Advisory',
    'services.consultingDesc': 'Efficiency improvements, solution architecture, and strategic technology guidance.',

    // Experience
    'experience.title': 'Experience & Technologies',
    'experience.description': "Throughout my career, I've delivered diverse solutions across multiple industries, working with the full Microsoft technology stack. From legacy NAV migrations to cutting-edge cloud implementations, I bring deep technical knowledge and practical experience to every project.",
    'experience.industryTitle': 'Industry Experience',
    'experience.industryDesc': 'Manufacturing, retail, professional services, and technology sectors. Experience with both greenfield implementations and complex legacy system migrations, always focusing on scalable, maintainable solutions.',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Ready to discuss your Business Central needs? Let's start a conversation.",
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Tell me about your project...',
    'contact.send': 'Send Message',
    'contact.directEmail': 'Direct Email',
    'contact.directEmailDesc': 'For immediate contact',
    'contact.expectTitle': 'What to expect',
    'contact.expect1': 'Response within 24 hours',
    'contact.expect2': 'Free initial consultation',
    'contact.expect3': 'Custom solution proposal',
    'contact.messageSent': 'Message sent!',
    'contact.messageDesc': "Thank you for your interest. I'll get back to you soon.",

    // Footer
    'footer.tagline': 'Smarter Business Central development',
    'footer.copyright': 'All rights reserved.',

    // Service features
    'features.alDevelopment': 'AL Development',
    'features.customReports': 'Custom Reports',
    'features.moduleDevelopment': 'Module Development',
    'features.codeOptimization': 'Code Optimization',
    'features.apiConnections': 'API Connections',
    'features.powerPlatform': 'Power Platform',
    'features.dataverseSync': 'Dataverse Sync',
    'features.thirdPartyIntegration': 'Third-party Integration',
    'features.solutionDesign': 'Solution Design',
    'features.performanceOptimization': 'Performance Optimization',
    'features.bestPractices': 'Best Practices',
    'features.technicalStrategy': 'Technical Strategy',
  },
  sv: {
    // Hero
    'hero.title': 'Central Edge',
    'hero.tagline': 'Smartare Business Central-utveckling',
    'hero.cta': 'Kontakta mig',

    // About
    'about.title': 'Om Adrian',
    'about.description': 'Jag är en Business Central-utvecklare med 3 års specialiserad erfarenhet, med Microsoft-certifieringar och har arbetat med både små startups och stora företag. Min expertis sträcker sig över hela spektrumet från NAV till Business Central, täcker både on-premise och molnimplementeringar.',
    'about.experience': '3+ års erfarenhet',
    'about.experienceDesc': 'Dedikerad Business Central-utveckling',
    'about.certified': 'Microsoft-certifierad',
    'about.certifiedDesc': 'Officiella Microsoft-certifieringar',
    'about.allSizes': 'Alla företagsstorlekar',
    'about.allSizesDesc': 'Från startups till stora företag',

    // Services
    'services.title': 'Tjänster',
    'services.subtitle': 'Omfattande Business Central-lösningar designade för att optimera din verksamhet',
    'services.extensions': 'Business Central Tillägg',
    'services.extensionsDesc': 'AL-utveckling, anpassade rapporter och specialiserade moduler skräddarsydda för dina affärsbehov.',
    'services.integrations': 'Integrationer',
    'services.integrationsDesc': 'Sömlösa API-anslutningar, Power Platform-integration och Dataverse-synkronisering.',
    'services.consulting': 'Konsulttjänster & Rådgivning',
    'services.consultingDesc': 'Effektivitetsförbättringar, lösningsarkitektur och strategisk teknikvägledning.',

    // Experience
    'experience.title': 'Erfarenhet & Teknologier',
    'experience.description': 'Under min karriär har jag levererat olika lösningar inom flera branscher, arbetat med hela Microsoft-teknikstacken. Från äldre NAV-migreringar till banbrytande molnimplementeringar, jag tillför djup teknisk kunskap och praktisk erfarenhet till varje projekt.',
    'experience.industryTitle': 'Branschexperiens',
    'experience.industryDesc': 'Tillverkning, detaljhandel, professionella tjänster och tekniksektorer. Erfarenhet av både greenfield-implementeringar och komplexa äldre systemmigreringar, alltid med fokus på skalbara, underhållbara lösningar.',

    // Contact
    'contact.title': 'Kontakta mig',
    'contact.subtitle': 'Redo att diskutera dina Business Central-behov? Låt oss starta en konversation.',
    'contact.sendMessage': 'Skicka meddelande',
    'contact.name': 'Ditt namn',
    'contact.email': 'Din e-post',
    'contact.message': 'Berätta om ditt projekt...',
    'contact.send': 'Skicka meddelande',
    'contact.directEmail': 'Direkt e-post',
    'contact.directEmailDesc': 'För omedelbar kontakt',
    'contact.expectTitle': 'Vad du kan förvänta dig',
    'contact.expect1': 'Svar inom 24 timmar',
    'contact.expect2': 'Gratis initial konsultation',
    'contact.expect3': 'Anpassat lösningsförslag',
    'contact.messageSent': 'Meddelande skickat!',
    'contact.messageDesc': 'Tack för ditt intresse. Jag återkommer till dig snart.',

    // Footer
    'footer.tagline': 'Smartare Business Central-utveckling',
    'footer.copyright': 'Alla rättigheter förbehållna.',

    // Service features
    'features.alDevelopment': 'AL-utveckling',
    'features.customReports': 'Anpassade rapporter',
    'features.moduleDevelopment': 'Modulutveckling',
    'features.codeOptimization': 'Kodoptimering',
    'features.apiConnections': 'API-anslutningar',
    'features.powerPlatform': 'Power Platform',
    'features.dataverseSync': 'Dataverse-synk',
    'features.thirdPartyIntegration': 'Tredjepartsintegration',
    'features.solutionDesign': 'Lösningsdesign',
    'features.performanceOptimization': 'Prestandaoptimering',
    'features.bestPractices': 'Bästa praxis',
    'features.technicalStrategy': 'Teknisk strategi',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('sv'); // Default to Swedish

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'sv')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};