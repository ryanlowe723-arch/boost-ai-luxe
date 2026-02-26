import { motion } from "framer-motion";
import { PhoneIncoming, RefreshCw, Star } from "lucide-react";

const steps = [
  {
    icon: PhoneIncoming,
    step: "01",
    title: "AI Answers Every Call — 24/7",
    description:
      "Every inbound call is captured, qualified, and routed. No voicemail. No missed revenue.",
  },
  {
    icon: RefreshCw,
    step: "02",
    title: "Missed Calls Become Booked Jobs",
    description:
      "If a call is missed, automated SMS follow-up triggers instantly — recovering jobs automatically.",
  },
  {
    icon: Star,
    step: "03",
    title: "Revenue Tracking & Visibility",
    description:
      "Every lead, booking, and conversion tracked inside your CRM dashboard. Full attribution, zero guesswork.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
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
              {/* Connector line (between cards, not after last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[60%] w-[80%] border-t border-dashed border-border/60" />
              )}

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
