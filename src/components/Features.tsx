import { FileText, Users, Brain, Shield, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Research",
    description: "Leverage artificial intelligence to analyze cases, find precedents, and draft documents faster than ever.",
  },
  {
    icon: FileText,
    title: "Document Automation",
    description: "Generate contracts, briefs, and legal documents with intelligent templates and auto-fill capabilities.",
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Comprehensive CRM built for law firms. Track cases, communications, and deadlines effortlessly.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with legal industry standards. Your data is always protected.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Automated billable hours tracking with detailed reporting and invoice generation.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics on your practice's performance.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything You Need to
            <span className="block text-accent mt-2">Excel in Legal Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for modern law firms and legal professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-accent/20 group"
              >
                <div className="mb-5 inline-block p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
