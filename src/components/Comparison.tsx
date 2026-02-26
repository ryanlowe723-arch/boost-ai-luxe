import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const traditional = [
  "£2k–£3k/month salary",
  "Limited business hours",
  "Sick days & turnover",
  "No automation",
  "No revenue tracking",
];

const ours = [
  "24/7 automated call handling",
  "Instant SMS & email follow-up",
  "Full CRM integration",
  "Revenue attribution dashboard",
  "Scales instantly",
];

const Comparison = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
            Why Hiring Another Receptionist{" "}
            <span className="gradient-text">Won't Fix This</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-1 tracking-tight">
              Traditional Staff
            </h3>
            <p className="text-xs text-muted-foreground mb-6">Limited hours, no follow-up, no tracking</p>
            <ul className="space-y-3">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="w-4 h-4 mt-0.5 shrink-0 text-destructive/60" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-primary/20 rounded-2xl p-8 shadow-sm relative"
          >
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide shadow-sm">
                Recommended
              </span>
            </div>
            <h3 className="text-lg font-display font-bold text-foreground mb-1 tracking-tight">
              Oryx Revenue System
            </h3>
            <p className="text-xs text-muted-foreground mb-6">Always on, fully automated, revenue-tracked</p>
            <ul className="space-y-3">
              {ours.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8 max-w-md mx-auto">
          Built to increase booked jobs — not just answer phones.
        </p>
      </div>
    </section>
  );
};

export default Comparison;
