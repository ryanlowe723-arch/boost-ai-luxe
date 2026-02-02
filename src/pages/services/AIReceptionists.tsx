import { motion } from "framer-motion";
import { Phone, Clock, BarChart3, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Phone,
    title: "24/7 Call Handling",
    description: "Never miss a call again. Our AI answers every inquiry, day or night, with natural conversation."
  },
  {
    icon: Clock,
    title: "Instant Response",
    description: "Zero hold times. Customers get immediate answers without waiting in queues."
  },
  {
    icon: BarChart3,
    title: "Lead Qualification",
    description: "Automatically qualify leads and route hot prospects to your sales team."
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Works with your existing phone system and CRM. Setup takes minutes, not months."
  }
];

const benefits = [
  "Reduce missed calls by 95%",
  "Save up to 60 hours per month on call handling",
  "Increase lead capture rate by 40%",
  "Available in multiple languages"
];

const AIReceptionists = () => {
  return (
    <PageLayout
      title="AI Receptionists"
      subtitle="Never miss another call. Our AI-powered receptionists handle customer inquiries 24/7 with human-like conversation."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-display font-bold mb-6">Why businesses choose our AI Receptionists</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Quick Setup", desc: "Connect your phone system in under 10 minutes" },
              { step: "2", title: "AI Training", desc: "We customize responses based on your business" },
              { step: "3", title: "Go Live", desc: "Start capturing leads and delighting customers" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display font-bold">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default AIReceptionists;
