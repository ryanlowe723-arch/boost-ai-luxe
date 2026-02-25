import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          {/* Background card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/80 via-background to-muted/60" />
            <div className="absolute inset-0 border border-border/40 rounded-3xl" />

            {/* Subtle decorative elements */}
            <div 
              className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, hsl(265 50% 92%) 0%, transparent 60%)"
              }}
            />
            <div 
              className="absolute bottom-0 left-0 w-72 h-72 opacity-25 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, hsl(230 40% 94%) 0%, transparent 55%)"
              }}
            />

            {/* Content */}
            <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight"
              >
                Ready to <span className="gradient-text">Deploy</span> Your Growth System?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Join 30+ service businesses already operating with Oryx revenue
                infrastructure. Let's discuss your growth objectives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group"
                >
                  <a
                    href="https://calendly.com/ryanlowe723/oryx-ai-demo-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Strategy Call
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-ghost-premium rounded-full px-8 font-medium text-muted-foreground"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Test The AI Live
                </Button>
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground"
              >
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (123) 456-7890
                </a>
                <a
                  href="mailto:hello@oryx.ai"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@oryx.ai
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
