import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "Available 9am-6pm PST",
    action: "Start Chat",
    primary: true
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 24 hours",
    action: "Send Email",
    href: "mailto:support@oryx.ai"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    availability: "Available for Pro+ plans",
    action: "Call Now",
    href: "tel:+15551234567"
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Browse our knowledge base",
    availability: "Available 24/7",
    action: "View Docs",
    href: "/resources/documentation"
  }
];

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most businesses are up and running within 24 hours. Our team handles the setup and training process."
  },
  {
    question: "Can I customize the AI's responses?",
    answer: "Absolutely. We work with you to train the AI on your specific business, products, and common customer questions."
  },
  {
    question: "What if a customer needs to speak to a human?",
    answer: "The AI can transfer calls to your team at any time, either automatically based on rules you set or when a customer requests it."
  },
  {
    question: "Do you offer a free trial?",
    answer: "We offer a 14-day free trial for new customers. No credit card required to get started."
  }
];

const Support = () => {
  return (
    <PageLayout
      title="Support"
      subtitle="We're here to help. Choose how you'd like to reach us."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Support Channels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`border-border/50 h-full ${channel.primary ? 'border-primary/30 bg-primary/5' : 'bg-card/50'}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <channel.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{channel.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{channel.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">{channel.availability}</p>
                  <div className="mt-auto">
                    {channel.href?.startsWith('/') ? (
                      <Button asChild variant={channel.primary ? "default" : "outline"} className="w-full rounded-full">
                        <Link to={channel.href}>{channel.action}</Link>
                      </Button>
                    ) : channel.href ? (
                      <Button asChild variant={channel.primary ? "default" : "outline"} className="w-full rounded-full">
                        <a href={channel.href}>{channel.action}</a>
                      </Button>
                    ) : (
                      <Button variant={channel.primary ? "default" : "outline"} className="w-full rounded-full">
                        {channel.action}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-lg font-display font-bold mb-2">Experiencing a critical issue?</h2>
          <p className="text-muted-foreground text-sm mb-4">
            For urgent production issues, our priority support line is available 24/7 for enterprise customers.
          </p>
          <a href="/company/contact" className="text-primary hover:underline text-sm">
            Contact our enterprise team →
          </a>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Support;
