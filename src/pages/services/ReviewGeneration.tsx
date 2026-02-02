import { motion } from "framer-motion";
import { Star, MessageSquare, TrendingUp, Shield } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Star,
    title: "Automated Review Requests",
    description: "Send perfectly-timed review requests via SMS and email after every positive interaction."
  },
  {
    icon: MessageSquare,
    title: "Multi-Platform Support",
    description: "Collect reviews on Google, Yelp, Facebook, and industry-specific platforms."
  },
  {
    icon: TrendingUp,
    title: "Reputation Dashboard",
    description: "Monitor all your reviews in one place with real-time alerts and analytics."
  },
  {
    icon: Shield,
    title: "Negative Review Filtering",
    description: "Catch unhappy customers before they post publicly and resolve issues privately."
  }
];

const stats = [
  { value: "4.2x", label: "More reviews collected" },
  { value: "89%", label: "Average positive rating" },
  { value: "3 days", label: "To see first results" }
];

const ReviewGeneration = () => {
  return (
    <PageLayout
      title="Review Generation"
      subtitle="Build a stellar online reputation with automated review collection that turns happy customers into 5-star advocates."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
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

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-display font-bold mb-6">The Review Generation Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold text-sm">1</span>
              <div>
                <h3 className="font-semibold">Customer completes service</h3>
                <p className="text-muted-foreground text-sm">Your CRM triggers our automated follow-up sequence</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold text-sm">2</span>
              <div>
                <h3 className="font-semibold">Satisfaction check</h3>
                <p className="text-muted-foreground text-sm">Quick survey filters out unhappy customers for private resolution</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold text-sm">3</span>
              <div>
                <h3 className="font-semibold">Review request sent</h3>
                <p className="text-muted-foreground text-sm">Happy customers receive a direct link to leave a review</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ReviewGeneration;
