import { motion } from "framer-motion";
import { Wrench, RefreshCw, Rocket } from "lucide-react";

const phases = [
  {
    icon: Wrench,
    month: "Month 1",
    title: "Build & Deploy",
    items: [
      "AI receptionist scripting & deployment",
      "CRM architecture & pipeline configuration",
      "Call flow engineering & routing logic",
      "Initial integration & testing",
    ],
  },
  {
    icon: RefreshCw,
    month: "Month 2",
    title: "Optimise & Calibrate",
    items: [
      "Follow-up automation sequences activated",
      "SMS & email flow calibration",
      "Lead reactivation campaigns deployed",
      "Review generation system live",
    ],
  },
  {
    icon: Rocket,
    month: "Month 3",
    title: "Scale & Refine",
    items: [
      "Performance tracking & reporting",
      "Conversion rate optimisation",
      "Strategic growth adjustments",
      "Full system refinement & handover",
    ],
  },
];

const DeploymentTimeline = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Implementation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
            The 90-Day Revenue Infrastructure{" "}
            <span className="gradient-text">Rollout</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.month}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-card border border-border/50 rounded-2xl p-7 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <phase.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary tracking-wide uppercase">
                    {phase.month}
                  </span>
                  <h3 className="text-base font-display font-bold text-foreground tracking-tight">
                    {phase.title}
                  </h3>
                </div>
              </div>
              <ul className="space-y-2.5">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentTimeline;
