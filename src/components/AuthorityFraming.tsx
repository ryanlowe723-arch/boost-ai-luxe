import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const AuthorityFraming = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 px-6 py-5 rounded-xl bg-card border border-border/50 shadow-sm max-w-xl">
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-primary/70" />
              <p className="text-sm font-semibold text-foreground">
                Low Risk. High Return.
              </p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              If we don't improve your inbound capture performance within 30 days, we continue optimising at no additional cost until we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityFraming;
