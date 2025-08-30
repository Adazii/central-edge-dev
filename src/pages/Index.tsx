import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
