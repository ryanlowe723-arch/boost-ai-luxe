import { motion } from "framer-motion";
import { Palette, Smartphone, Gauge, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique, brand-aligned designs that set you apart from cookie-cutter templates."
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Responsive designs that look stunning and perform flawlessly on every device."
  },
  {
    icon: Gauge,
    title: "Lightning Fast",
    description: "Optimized for speed with sub-2-second load times that keep visitors engaged."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with search engines in mind to help you rank higher and get found."
  }
];

const packages = [
  {
    name: "Starter",
    description: "Perfect for small businesses launching their online presence",
    features: ["5-page responsive website", "Mobile optimization", "Contact forms", "Basic SEO setup"]
  },
  {
    name: "Professional",
    description: "For growing businesses that need more functionality",
    features: ["10+ page website", "Advanced animations", "CRM integration", "Blog setup", "Analytics dashboard"]
  },
  {
    name: "Enterprise",
    description: "Full-scale solutions for established businesses",
    features: ["Unlimited pages", "Custom functionality", "E-commerce integration", "Priority support", "Monthly maintenance"]
  }
];

const WebDesign = () => {
  return (
    <PageLayout
      title="Web Design"
      subtitle="High-converting websites that capture attention and turn visitors into customers. Built for performance, designed for impact."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card/50 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Our Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-border/50 ${index === 1 ? 'border-primary/50 bg-primary/5' : 'bg-card/50'}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-display font-bold mb-4">See Our Work</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From local businesses to enterprise clients, we've helped hundreds of companies establish a powerful online presence. Check out our case studies to see the results.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default WebDesign;
