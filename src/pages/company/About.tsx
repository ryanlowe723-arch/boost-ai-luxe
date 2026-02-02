import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Heart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your growth, not just our deliverables."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make starts with what's best for our clients."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve to bring you cutting-edge solutions."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent pricing, honest communication, and ethical practices."
  }
];

const milestones = [
  { year: "2022", event: "Oryx founded with a mission to democratize AI for small businesses" },
  { year: "2023", event: "Launched AI Receptionist product, serving 50+ businesses" },
  { year: "2024", event: "Expanded to full-service AI solutions, grew team to 15+" },
  { year: "2025", event: "3,800+ calls handled monthly, 32+ active clients" }
];

const About = () => {
  return (
    <PageLayout
      title="About Us"
      subtitle="We're on a mission to help businesses grow with AI-powered solutions that actually work."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Oryx, we believe every business deserves access to enterprise-grade AI technology. 
            We're building tools that help small and medium businesses compete with the big players—without 
            the big price tag or technical complexity.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {values.map((value, index) => (
            <Card key={index} className="border-border/50 bg-card/50 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Our Journey</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-primary font-display font-bold text-lg w-16 flex-shrink-0">
                  {milestone.year}
                </span>
                <p className="text-muted-foreground">{milestone.event}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-display font-bold mb-4">Built by Experts</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our team brings experience from leading tech companies and a shared passion for 
            making AI accessible to businesses of all sizes.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default About;
