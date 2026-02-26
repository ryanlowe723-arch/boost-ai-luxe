import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground mb-8">
            This Is Not For Businesses That:
          </h2>

          <ul className="space-y-3 mb-10 max-w-md mx-auto text-left">
            {[
              "Aren't generating inbound demand",
              "Want the cheapest option available",
              "Aren't serious about scaling",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg font-display font-semibold text-foreground mb-8">
            This is for operators building{" "}
            <span className="gradient-text">serious revenue infrastructure.</span>
          </p>

          <Button
            asChild
            size="lg"
            className="btn-primary-premium text-primary-foreground rounded-full px-10 py-6 text-base font-semibold group"
          >
            <a
              href="https://calendly.com/ryanlowe723/oryx-ai-demo-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
