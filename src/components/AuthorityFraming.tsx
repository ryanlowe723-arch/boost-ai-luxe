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
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card border border-border/50 shadow-sm">
            <Lock className="w-4 h-4 text-primary/70" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              We partner with a{" "}
              <span className="font-semibold text-foreground">limited number</span> of
              service businesses per month to ensure successful deployment and
              performance optimisation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityFraming;
