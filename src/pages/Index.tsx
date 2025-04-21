
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThreeBackground } from "@/components/three-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { CVSection } from "@/components/cv-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  // Smooth scroll to sections when URL contains a hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      <div className="relative min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3E50] dark:from-[#1A1F2C] dark:to-[#0F172A]">
        <div className="absolute inset-0 pointer-events-none opacity-90">
          <ThreeBackground />
        </div>
        <div className="relative z-10">
          <Navbar />
          <main className="relative">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <EducationSection />
            <CVSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
