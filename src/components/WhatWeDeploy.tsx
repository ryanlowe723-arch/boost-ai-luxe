import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Mail, RefreshCw, Star, MapPin, Globe, Send } from "lucide-react";

const capabilities = [
  { icon: Phone, title: "AI Receptionists", description: "Every call answered instantly, 24/7. Zero missed leads.", path: "/services/ai-receptionists" },
  { icon: MessageSquare, title: "AI Website Chat", description: "Capture visitors the moment they land. Qualify & book automatically.", path: "/services/ai-chat-systems" },
  { icon: Mail, title: "Automated Follow-Up", description: "SMS & email sequences that nurture every lead until they convert.", path: "/services/automated-follow-up" },
  { icon: RefreshCw, title: "Lead Reactivation", description: "Revive dead leads and past customers on autopilot.", path: "/services/lead-reactivation" },
  { icon: Star, title: "Review Automation", description: "Generate 5-star Google reviews hands-free after every job.", path: "/services/review-automation" },
  { icon: MapPin, title: "Google Maps & SEO", description: "Optimise your Business Profile and rank higher in local search.", path: "/services/google-maps-seo" },
  { icon: Globe, title: "Revenue Websites", description: "Custom-built, conversion-optimised sites with strategic SEO architecture.", path: "/services/revenue-websites" },
  { icon: Send, title: "Social Media DM Automation", description: "Respond, qualify, and book leads directly from Instagram & Facebook 24/7.", path: "/services/social-media-dm" },
];

const WhatWeDeploy = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/10" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Full Revenue Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Everything You Need to <span className="gradient-text">Capture Every Lead</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We don't just answer phones. We deploy the complete system — so every lead is captured, every customer followed up, and every pound of marketing spend actually converts.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <Link
                to={cap.path}
                className="block bg-card border border-border/50 rounded-2xl p-4 sm:p-6 text-center hover:border-primary/30 hover:shadow-xl transition-all duration-400 h-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <cap.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xs sm:text-sm font-display font-bold text-foreground mb-1 sm:mb-2 tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed hidden sm:block">
                  {cap.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeploy;