import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: t('contact.messageSent'),
      description: t('contact.messageDesc'),
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading font-bold mb-4 text-foreground slide-up">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground slide-up">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="card-shadow bg-card border-0 fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Send className="w-5 h-5 text-accent" />
                  {t('contact.sendMessage')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('contact.name')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('contact.email')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t('contact.message')}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-border bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    {t('contact.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="card-shadow bg-card border-0 mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t('contact.directEmail')}</h3>
                      <p className="text-muted-foreground">{t('contact.directEmailDesc')}</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:contact@centraledge.se" 
                    className="text-accent hover:text-accent/80 font-medium transition-smooth"
                  >
                    contact@centraledge.se
                  </a>
                </CardContent>
              </Card>

              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('contact.expectTitle')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    {t('contact.expect1')}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    {t('contact.expect2')}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    {t('contact.expect3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};