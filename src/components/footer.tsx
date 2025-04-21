
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Rajveer Raj</h3>
            <p className="text-sm text-muted-foreground">Data Scientist & ML Enthusiast</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:rajveermatubay@gmail.com" 
              className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
            <a 
              href="tel:7254957446" 
              className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              title="Phone"
            >
              <Phone className="w-5 h-5" />
              <span className="sr-only">Phone</span>
            </a>
            <a 
              href="https://github.com/Rajveer18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://opencerta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Rajveer Raj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
