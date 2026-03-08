import { motion } from "framer-motion";
import { Book, Code, Settings, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Everything you need to begin using Oryx products",
    links: [
      "Quick Start Guide",
      "Account Setup",
      "First Integration",
      "Dashboard Overview",
    ],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete documentation for developers",
    links: ["Authentication", "Endpoints", "Webhooks", "Rate Limits"],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize Oryx to fit your business needs",
    links: ["AI Training", "Call Routing", "Review Templates", "Automation Rules"],
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Solutions to common issues",
    links: ["Connection Issues", "Voice Quality", "Integration Errors", "Billing Questions"],
  },
];

const popularArticles = [
  "How to train your AI receptionist",
  "Setting up review automation",
  "Integrating with your CRM",
  "Understanding your analytics dashboard",
  "Customizing call scripts",
  "Managing multiple locations",
];

const supportTopicHref = (topic: string) =>
  `/resources/support?topic=${encodeURIComponent(topic.toLowerCase())}`;

const Documentation = () => {
  return (
    <PageLayout
      title="Documentation"
      subtitle="Everything you need to get the most out of Oryx. Guides, API references, and troubleshooting."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-border/50 bg-card/50 h-full hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.links.map((link, lIndex) => (
                      <li key={lIndex}>
                        <Link to={supportTopicHref(link)} className="text-sm text-primary hover:underline">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Popular Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-display font-bold mb-6">Popular Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={supportTopicHref(article)}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {article}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* API Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Need help? Check our <Link to="/resources/support" className="text-primary hover:underline">Support page</Link> or view <Link to="/resources/status" className="text-primary hover:underline">System Status</Link>.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Documentation;
