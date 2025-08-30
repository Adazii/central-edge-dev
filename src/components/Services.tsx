import { Code, Link, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Code,
      title: t('services.extensions'),
      description: t('services.extensionsDesc'),
      features: [t('features.alDevelopment'), t('features.customReports'), t('features.moduleDevelopment'), t('features.codeOptimization')]
    },
    {
      icon: Link,
      title: t('services.integrations'),
      description: t('services.integrationsDesc'),
      features: [t('features.apiConnections'), t('features.powerPlatform'), t('features.dataverseSync'), t('features.thirdPartyIntegration')]
    },
    {
      icon: MessageCircle,
      title: t('services.consulting'),
      description: t('services.consultingDesc'),
      features: [t('features.solutionDesign'), t('features.performanceOptimization'), t('features.bestPractices'), t('features.technicalStrategy')]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-4 text-foreground slide-up">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-shadow hover:card-shadow-hover transition-smooth group fade-in bg-card border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};