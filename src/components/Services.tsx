import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Monitor, Zap, MessageSquare, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Receptionists",
    description:
      "24/7 AI-powered receptionists that answer calls, book appointments, and never miss a lead. Your business, always on.",
    features: ["24/7 Availability", "Natural Conversations", "Appointment Booking", "Lead Capture"],
    gradient: "from-primary to-purple-400",
    path: "/services/ai-receptionists",
  },
  {
    icon: Monitor,
    title: "Premium Web Design",
    description:
      "Stunning websites that convert visitors into customers. Custom designs backed by conversion science.",
    features: ["Custom Design", "Mobile Optimized", "SEO Ready", "Fast Loading"],
    gradient: "from-purple-500 to-pink-500",
    path: "/services/web-design",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Assistants",
    description:
      "Intelligent chatbots that engage visitors, answer questions, and qualify leads around the clock.",
    features: ["Instant Responses", "Lead Qualification", "Smart Routing", "Multi-language"],
    gradient: "from-primary to-violet-500",
    path: "/services/ai-chat",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Streamline your operations with AI-driven workflows. More efficiency, less manual work.",
    features: ["Workflow Automation", "CRM Integration", "Smart Scheduling", "Analytics"],
    gradient: "from-violet-400 to-primary",
    path: "/services/automation",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 tracking-tight">
            Everything Your Business <span className="gradient-text">Needs to Grow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We combine cutting-edge AI technology with premium design to deliver 
            solutions that actually move the needle for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
              className="group relative"
            >
              <Link 
                to={service.path}
                className="block bg-card border border-border/50 rounded-2xl p-8 h-full relative overflow-hidden shadow-sm hover:shadow-xl hover:border-border transition-all duration-500 cursor-pointer"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
