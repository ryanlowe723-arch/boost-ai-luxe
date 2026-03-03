import { motion } from "framer-motion";
import { Calendar, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book a Strategy Call",
    description: "15 minutes. No commitment. We assess your revenue leaks and inbound capture gaps.",
  },
  {
    icon: Settings,
    step: "02",
    title: "We Build Your System",
    description: "Custom AI receptionist, CRM flows, review automation, Google optimisation, and website — configured for your business.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live in 14 Days",
    description: "Full deployment, testing, and team training. Zero downtime.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Watch Revenue Grow",
    description: "Real-time dashboard shows every captured lead, booked job, recovered call, and new review.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto relative">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden md:block absolute top-14 left-[12%] right-[12%] border-t-2 border-dashed border-primary/20" />
          
          {/* Vertical connector line (mobile only) */}
          <div className="md:hidden absolute top-14 bottom-14 left-[50%] -translate-x-1/2 border-l-2 border-dashed border-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="relative text-center group"
            >
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-background border border-border/40 shadow-sm mb-6 relative group-hover:shadow-md transition-shadow duration-300">
                <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold text-foreground mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
