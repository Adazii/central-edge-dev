import { Code, Link, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Business Central Extensions",
      description: "AL development, custom reports, and specialized modules tailored to your business needs.",
      features: ["AL Development", "Custom Reports", "Module Development", "Code Optimization"]
    },
    {
      icon: Link,
      title: "Integrations",
      description: "Seamless API connections, Power Platform integration, and Dataverse synchronization.",
      features: ["API Connections", "Power Platform", "Dataverse Sync", "Third-party Integration"]
    },
    {
      icon: MessageCircle,
      title: "Consulting & Advisory",
      description: "Efficiency improvements, solution architecture, and strategic technology guidance.",
      features: ["Solution Design", "Performance Optimization", "Best Practices", "Technical Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-4 text-foreground slide-up">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-up">
            Comprehensive Business Central solutions designed to optimize your operations
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