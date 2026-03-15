import { motion } from "framer-motion";

const rows = [
  { metric: "Availability", traditional: "40 hrs/week", oryx: "168 hrs/week" },
  { metric: "Monthly Cost", traditional: "£2,500+", oryx: "£697+" },
  { metric: "Speed to Answer", traditional: "3–5 rings", oryx: "Instant" },
  { metric: "Throughput", traditional: "1 call at a time", oryx: "Unlimited" },
];

const Comparison = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
            <span style={{ color: "#b24dff" }}>Oryx</span> vs <span className="text-gray-500">Traditional Staff</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-border/30"
          style={{ backgroundColor: "#0d0d0d" }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 text-sm font-semibold" style={{ backgroundColor: "#161616" }}>
            <div className="p-5 text-gray-400 uppercase tracking-widest text-xs">Metric</div>
            <div className="p-5 text-gray-400 uppercase tracking-widest text-xs text-center">Traditional</div>
            <div className="p-5 text-center uppercase tracking-widest text-xs" style={{ color: "#00ffa3", backgroundColor: "rgba(178, 77, 255, 0.06)", boxShadow: "inset 0 0 0 1px rgba(178, 77, 255, 0.15)" }}>
              Oryx
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={row.metric}
              className="grid grid-cols-3 text-sm border-t"
              style={{
                borderColor: "#1f1f1f",
                backgroundColor: index % 2 === 0 ? "#0d0d0d" : "#111111",
              }}
            >
              <div className="p-5 text-white font-medium">{row.metric}</div>
              <div className="p-5 text-gray-500 text-center">{row.traditional}</div>
              <div
                className="p-5 text-center font-semibold"
                style={{ color: "#00ffa3" }}
              >
                {row.oryx}
              </div>
            </div>
          ))}
        </motion.div>

        <p className="text-sm text-muted-foreground text-center mt-8 max-w-md mx-auto">
          Built to increase booked jobs — not just answer phones.
        </p>
      </div>
    </section>
  );
};

export default Comparison;
