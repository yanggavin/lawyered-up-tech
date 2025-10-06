import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-[var(--gradient-hero)] p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-accent/5"></div>
          
          <div className="relative space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of legal professionals who trust LawyerIT to streamline their workflow and grow their practice.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button variant="accent" size="lg" className="group">
                Start Your Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 pt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
