
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-heading">Rajveer Raj</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-foreground hover:text-accent font-medium transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-foreground hover:text-accent font-medium transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className="text-foreground hover:text-accent font-medium transition-colors"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-foreground hover:text-accent font-medium transition-colors"
          >
            Contact
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="flex flex-col space-y-4 p-6">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-accent py-2 font-medium transition-colors text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-foreground hover:text-accent py-2 font-medium transition-colors text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="text-foreground hover:text-accent py-2 font-medium transition-colors text-left"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-accent py-2 font-medium transition-colors text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
