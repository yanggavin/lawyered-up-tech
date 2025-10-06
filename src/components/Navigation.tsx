import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold text-primary">LawyerIT</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-accent transition-colors font-medium">
            Features
          </a>
          <a href="#solutions" className="text-foreground hover:text-accent transition-colors font-medium">
            Solutions
          </a>
          <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
            About
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost">Sign In</Button>
          <Button variant="accent">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
