const stats = [
  { number: "10,000+", label: "Active Users" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "2M+", label: "Documents Processed" },
  { number: "45%", label: "Time Saved" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-90"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-accent">{stat.number}</div>
              <div className="text-sm lg:text-base text-primary-foreground/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
