import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const openings = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and improve our AI systems that power thousands of business interactions."
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Work on our web applications and customer-facing products using React and Node.js."
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Help our clients get the most value from Oryx products and build lasting relationships."
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    description: "Connect with potential customers and help them discover how Oryx can transform their business."
  }
];

const benefits = [
  "Competitive salary + equity",
  "Fully remote work",
  "Unlimited PTO",
  "Health, dental, and vision insurance",
  "Home office stipend",
  "Learning & development budget"
];

const Careers = () => {
  return (
    <PageLayout
      title="Careers"
      subtitle="Join us in building the future of AI for business. We're always looking for talented people who share our mission."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-2xl font-display font-bold mb-4">Why Oryx?</h2>
          <p className="text-muted-foreground leading-relaxed">
            We're a small, focused team that punches above its weight. You'll work on meaningful 
            problems, ship fast, and see the direct impact of your work on real businesses. No 
            bureaucracy, no politics—just great people building great products.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-2xl font-display font-bold mb-6 text-center">Benefits & Perks</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Open Positions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job, index) => (
              <Card key={index} className="border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-1">{job.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="rounded-full shrink-0">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* No Fit? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Don't see a role that fits? <a href="/company/contact" className="text-primary hover:underline">Reach out anyway</a>—we're always interested in meeting talented people.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Careers;
