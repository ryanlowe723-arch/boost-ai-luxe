import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Monitor, Zap, MessageSquare, ArrowUpRight, Star, MapPin, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Receptionists",
    description: "Every call answered, every lead captured, every appointment booked — 24/7. Zero missed revenue.",
    features: ["24/7 Call Capture", "Lead Qualification", "Appointment Booking", "Instant Follow-Up"],
    gradient: "from-primary to-purple-400",
    path: "/services/ai-receptionists",
  },
  {
    icon: Monitor,
    title: "Revenue Websites",
    description: "Websites built to convert visitors into booked jobs. Not brochures — revenue assets.",
    features: ["Conversion-Focused", "Mobile Optimised", "SEO Built-In", "Fast Load Times"],
    gradient: "from-purple-500 to-pink-500",
    path: "/services/revenue-websites",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Systems",
    description: "Engage, qualify, and route website visitors into your pipeline — automatically, around the clock.",
    features: ["Instant Response", "Lead Qualification", "Smart Routing", "Multi-language"],
    gradient: "from-primary to-violet-500",
    path: "/services/ai-chat-systems",
  },
  {
    icon: Zap,
    title: "CRM Automation",
    description: "Automated follow-up, lead tracking, and pipeline management. Every lead moves — without manual effort.",
    features: ["Automated Follow-Up", "Pipeline Tracking", "Smart Scheduling", "Revenue Attribution"],
    gradient: "from-violet-400 to-primary",
    path: "/services/crm-automation",
  },
  {
    icon: Star,
    title: "Review Automation",
    description: "Automated review requests after every job. Grow your 5-star rating on Google hands-free. More reviews = more trust = more customers.",
    features: ["Auto Review Requests", "Google Integration", "Reputation Monitoring", "Response Management"],
    gradient: "from-primary to-amber-500",
    path: "/services/review-automation",
  },
  {
    icon: MapPin,
    title: "Google Maps & SEO",
    description: "We optimise your Google Business Profile, build strategic service pages, and structure your site so you rank higher on Google Maps and local search.",
    features: ["GBP Optimisation", "Local SEO", "Service Pages", "Maps Ranking"],
    gradient: "from-emerald-500 to-primary",
    path: "/services/revenue-websites",
  },
  {
    icon: RefreshCw,
    title: "Lead Reactivation",
    description: "Automated campaigns that reach out to past enquiries and dormant customers — reviving revenue you'd written off.",
    features: ["Dormant Lead Outreach", "Re-engagement Sequences", "Win-back Campaigns", "ROI Tracking"],
    gradient: "from-primary to-blue-500",
    path: "/services/crm-automation",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            What We Deploy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 tracking-tight">
            A Complete <span className="gradient-text">Revenue Capture System</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Capture every lead, automate every follow-up, dominate your local market. We deploy a fully integrated inbound capture and growth engine built for service businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Second row - 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {services.slice(4).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[number]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
    className="group relative"
  >
    <Link 
      to={service.path}
      className="block bg-card border border-border/50 rounded-2xl p-8 h-full relative overflow-hidden shadow-sm hover:shadow-xl hover:border-border transition-all duration-500 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-7 h-7 text-primary-foreground" />
      </div>

      <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
        {service.title}
        <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-muted-foreground mb-6">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>

      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </Link>
  </motion.div>
);

export default Services;
