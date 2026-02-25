import { motion } from "framer-motion";
import { TrendingUp, PhoneOff, Zap, BarChart3 } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Deployment in Action
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
            Real Deployment Example
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-foreground tracking-tight">
                Multi-Location HVAC Company
              </h3>
              <p className="text-xs text-muted-foreground">3 locations · 80+ inbound calls/day</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <PhoneOff className="w-4 h-4 text-destructive/70" />
                Problem
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                38% of inbound calls went unanswered during peak hours. No follow-up system existed.
                Leads were lost permanently within 24 hours of first contact.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Zap className="w-4 h-4 text-primary" />
                Deployment
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI receptionist deployed across all lines. CRM automation built with multi-stage
                follow-up sequences. Google review system activated post-service.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                Outcome
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zero missed calls within 48 hours. 67% increase in booked jobs within 30 days.
                142 leads recovered from previous months.
              </p>
            </div>
          </div>

          {/* Results strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/40">
            {[
              { value: "0%", label: "Missed Calls" },
              { value: "+67%", label: "Booked Jobs" },
              { value: "142", label: "Leads Recovered" },
              { value: "4.8★", label: "Google Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="text-center"
              >
                <div className="text-2xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
