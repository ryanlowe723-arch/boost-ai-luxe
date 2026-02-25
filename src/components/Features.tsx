import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Fully operational within weeks, not months. We engineer your system and deploy it fast.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance. Your data and client information remain protected.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Average 300% increase in captured leads. Performance tracked, measured, and optimised.",
  },
  {
    icon: Clock,
    title: "Always Operational",
    description: "Your revenue infrastructure never sleeps. Every call answered, every lead captured — 24/7.",
  },
  {
    icon: Users,
    title: "Seamless Handoff",
    description: "Intelligent routing to your team when needed. AI and human working in concert.",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    description: "Track every call, conversion, and revenue event. Data-driven decisions, not guesswork.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">
              The Oryx Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 tracking-tight">
              Built for Businesses That{" "}
              <span className="gradient-text">Demand Results</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't build tools — we deploy growth engines. Every component is 
              engineered to capture more leads, accelerate revenue, 
              and scale without operational overhead.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl font-display font-bold gradient-text tracking-tight">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">Uptime Guarantee</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl font-display font-bold gradient-text tracking-tight">&lt;2s</div>
                <div className="text-sm text-muted-foreground mt-1">Response Time</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
                className="group"
              >
                <div className="bg-card border border-border/50 rounded-xl p-6 h-full hover:border-primary/20 hover:shadow-md transition-all duration-400">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-400">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
