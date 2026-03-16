import { motion } from "framer-motion";
import { TrendingUp, PhoneOff, Zap, BarChart3 } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="results" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Proven Results
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
            Real Revenue Impact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold text-foreground tracking-tight">
                Multi-Location HVAC Operator
              </h3>
              <p className="text-xs text-muted-foreground">3 locations · 80+ inbound calls/day</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <PhoneOff className="w-4 h-4 text-destructive/70" />
                Problem
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                38% of inbound calls went unanswered. No structured follow-up. Leads lost within hours.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Zap className="w-4 h-4 text-primary" />
                Deployment
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI receptionist installed across all lines. Missed-call automation activated. Multi-stage follow-up deployed. Review system implemented.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                Outcome
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                0 missed calls within 48 hours. +67% booked jobs in 30 days. 142 dormant leads reactivated.
              </p>
            </div>
          </div>

          {/* Results strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/40">
            {[
              { value: "0%", label: "Missed Calls" },
              { value: "+67%", label: "Booked Jobs" },
              { value: "142", label: "Leads Reactivated" },
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
                <div className="text-xl sm:text-2xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Financial callout */}
          <p className="text-sm font-display font-bold text-foreground text-center pt-5">
            Estimated <span className="gradient-text">£18,000+</span> recovered revenue in first month.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;