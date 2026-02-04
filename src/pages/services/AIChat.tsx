import { motion } from "framer-motion";
import { MessageSquare, Clock, Globe, Users, Zap, Bot, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your AI chatbot never sleeps, providing instant responses to visitors at any hour.",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Communicate with customers in their preferred language automatically.",
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Automatically qualify leads based on their responses and route them appropriately.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "No more waiting. Customers get answers in milliseconds, not minutes.",
  },
];

const capabilities = [
  "Answer frequently asked questions instantly",
  "Collect visitor information and contact details",
  "Schedule appointments and demos automatically",
  "Route complex inquiries to the right team member",
  "Provide product recommendations based on needs",
  "Handle multiple conversations simultaneously",
];

const AIChat = () => {
  return (
    <PageLayout
      title="AI Chat Assistants"
      subtitle="Intelligent chatbots that engage visitors, answer questions, and qualify leads around the clock."
    >
      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              What Your AI Assistant Can Do
            </h2>
            <p className="text-muted-foreground">
              Our AI chat assistants are trained to handle a wide range of customer interactions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Easy Integration, Powerful Results
              </h2>
              <p className="text-muted-foreground mb-6">
                Our AI chat assistants integrate seamlessly with your existing website. 
                A simple code snippet is all you need to start engaging visitors 24/7.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Works with any website platform
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Custom branding and styling
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  CRM and calendar integrations
                </li>
              </ul>
              <Button
                asChild
                className="btn-primary-premium text-primary-foreground rounded-full px-6 group"
              >
                <a
                  href="https://calendly.com/ryanlowe723/oryx-ai-demo-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See It In Action
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-violet-500/10 rounded-2xl p-8">
                <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Oryx Assistant</div>
                      <div className="text-xs text-muted-foreground">Online now</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted/50 rounded-lg px-4 py-2 text-sm max-w-[80%]">
                      Hi! How can I help you today?
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm max-w-[80%] ml-auto">
                      I'd like to learn about your services
                    </div>
                    <div className="bg-muted/50 rounded-lg px-4 py-2 text-sm max-w-[80%]">
                      Great! We offer AI receptionists, web design, and automation. Which interests you most?
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIChat;