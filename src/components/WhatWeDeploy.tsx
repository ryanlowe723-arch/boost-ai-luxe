import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, RefreshCw, Star, MapPin, Globe, Send } from "lucide-react";

const capabilities = [
  { icon: Phone, title: "AI Receptionists", description: "Every call answered instantly, 24/7. Zero missed leads." },
  { icon: MessageSquare, title: "AI Website Chat", description: "Capture visitors the moment they land. Qualify & book automatically." },
  { icon: Mail, title: "Automated Follow-Up", description: "SMS & email sequences that nurture every lead until they convert." },
  { icon: RefreshCw, title: "Lead Reactivation", description: "Revive dead leads and past customers on autopilot." },
  { icon: Star, title: "Review Automation", description: "Generate 5-star Google reviews hands-free after every job." },
  { icon: MapPin, title: "Google Maps & SEO", description: "Optimise your Business Profile and rank higher in local search." },
  { icon: Globe, title: "Revenue Websites", description: "Custom-built, conversion-optimised sites with strategic SEO architecture." },
  { icon: Send, title: "Social Media DM Automation", description: "Respond, qualify, and book leads directly from Instagram & Facebook 24/7." },
];

const WhatWeDeploy = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Full Revenue Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Everything You Need to <span className="gradient-text">Capture Every Lead</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just answer phones. We deploy the complete system — so every lead is captured, every customer followed up, and every pound of marketing spend actually converts.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className={`bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/20 hover:shadow-lg transition-all duration-300 ${index === 6 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-display font-bold text-foreground mb-2 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeploy;
