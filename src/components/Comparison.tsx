import { motion } from "framer-motion";

const rows = [
  { metric: "Availability", traditional: "40 hrs/week", oryx: "168 hrs/week" },
  { metric: "Monthly Cost", traditional: "£2,500+", oryx: "£697+" },
  { metric: "Speed to Answer", traditional: "3–5 rings", oryx: "Instant" },
  { metric: "Throughput", traditional: "1 call at a time", oryx: "Unlimited" },
];

const Comparison = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            The Difference
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold tracking-tight">
            <span className="text-foreground">Traditional Staff</span> vs{" "}
            <span style={{ color: "#b24dff" }}>Oryx</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 text-[10px] sm:text-xs font-semibold uppercase tracking-widest border-b border-border/50 bg-muted/30">
            <div className="p-3 sm:p-5 text-muted-foreground">Metric</div>
            <div className="p-3 sm:p-5 text-muted-foreground text-center">Traditional</div>
            <div className="p-3 sm:p-5 text-center" style={{ color: "#b24dff", backgroundColor: "rgba(178, 77, 255, 0.03)" }}>
              Oryx
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={row.metric}
              className={`grid grid-cols-3 text-xs sm:text-sm ${index < rows.length - 1 ? "border-b border-border/50" : ""}`}
            >
              <div className="p-3 sm:p-5 text-foreground font-medium">{row.metric}</div>
              <div className="p-3 sm:p-5 text-muted-foreground text-center" style={{ opacity: 0.6 }}>
                {row.traditional}
              </div>
              <div
                className="p-3 sm:p-5 text-center font-semibold"
                style={{ color: "#b24dff", backgroundColor: "rgba(178, 77, 255, 0.03)" }}
              >
                {row.oryx}
              </div>
            </div>
          ))}
        </motion.div>

        <p className="text-xs sm:text-sm text-muted-foreground text-center mt-6 sm:mt-8 max-w-md mx-auto">
          Built to increase booked jobs — not just answer phones.
        </p>
      </div>
    </section>
  );
};

export default Comparison;