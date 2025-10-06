import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Trusted by 10,000+ Legal Professionals
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Your Complete
              <span className="block text-accent mt-2">Law Tech Solution</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Streamline your legal practice with cutting-edge technology. From case management to client communication, LawyerIT empowers your firm to work smarter, not harder.
            </p>
            
            <div className="space-y-3">
              {["AI-Powered Document Analysis", "Secure Client Portal", "Automated Workflows"].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="LawyerIT Platform Interface"
              className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
