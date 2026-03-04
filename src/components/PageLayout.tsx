import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  showCTA?: boolean;
}

const PageLayout = ({ title, subtitle, children, showCTA = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-texture" />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[300px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(ellipse, hsl(265 60% 92%) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* CTA Strip */}
      {showCTA && (
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                See how Oryx AI can help you capture more leads and grow faster.
              </p>
              <Button 
                asChild
                size="lg" 
                className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group"
              >
                <a
                  href="https://cal.com/oryx-systems/oryxdemo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default PageLayout;
