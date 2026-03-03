import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyBottomCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/30"
          style={{
            background: "hsl(0 0% 8% / 0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div className="container mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm font-medium text-white/90 text-center sm:text-left">
              Ready to stop losing revenue?
            </p>
            <Button
              asChild
              size="sm"
              className="btn-primary-premium text-primary-foreground rounded-full px-6 font-semibold group whitespace-nowrap"
            >
              <a
                href="https://calendly.com/ryanlowe723/oryx-ai-demo-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBottomCTA;
