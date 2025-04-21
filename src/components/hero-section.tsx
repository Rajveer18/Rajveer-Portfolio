
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
              Rajveer Raj
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl text-pretty">
              Aspiring Data Scientist with a solid foundation in Python, SQL, and data analytics
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
              <a href="mailto:rajveermatubay@gmail.com">
                <Mail className="w-4 h-4" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
              <a href="tel:7254957446">
                <Phone className="w-4 h-4" />
                Call Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
              <a href="https://github.com/Rajveer18" target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
              <a href="https://opencerta/" target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" />
                OpenCerta
              </a>
            </Button>
          </div>

          <div className="w-full max-w-3xl mx-auto bg-card border border-border rounded-lg p-6 shadow-lg animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h2 className="text-xl font-semibold mb-3">Summary</h2>
            <p className="text-muted-foreground text-pretty">
              Aspiring data scientist with a solid foundation in Python, SQL, and data analytics. 
              Proficient in leveraging data-driven insights and machine learning to solve complex problems. 
              Eager to apply analytical skills and technical expertise in a challenging role at a leading FASP company. 
              Committed to continuous learning and contributing to innovative projects in data science and ML.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
