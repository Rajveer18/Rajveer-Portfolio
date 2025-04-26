
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CVSection() {
  return (
    <section id="cv" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading text-gray-900 dark:text-gray-100">
          Curriculum Vitae
        </h2>
        
        <Card className="max-w-3xl mx-auto glass dark:bg-opacity-10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">My CV</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-8 text-pretty max-w-2xl mx-auto">
              I'm a Data Scientist and Machine Learning Engineer with experience in developing AI solutions for
              real-world problems. My CV contains detailed information about my education, professional
              experience, technical skills, and projects.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="gap-2"
                variant="default"
              >
                <a 
                  href="https://drive.google.com/file/d/1IjSLlKGUvSpX-csYIZ-_Dpj00rzTnUWG/view" 
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText className="w-5 h-5" />
                  View CV Online
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
