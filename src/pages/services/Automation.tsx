import { motion } from "framer-motion";
import { Workflow, Repeat, Bell, Database } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks and free your team to focus on high-value work."
  },
  {
    icon: Repeat,
    title: "Process Integration",
    description: "Connect your tools and create seamless data flows between systems."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get alerts when it matters and automate follow-ups based on triggers."
  },
  {
    icon: Database,
    title: "Data Sync",
    description: "Keep your data consistent across all platforms with real-time synchronization."
  }
];

const useCases = [
  {
    title: "Lead Management",
    description: "Automatically capture leads from forms, qualify them, and route to sales reps"
  },
  {
    title: "Customer Onboarding",
    description: "Trigger welcome sequences, create accounts, and schedule follow-ups automatically"
  },
  {
    title: "Invoice Processing",
    description: "Extract data from invoices, update records, and trigger payment reminders"
  },
  {
    title: "Report Generation",
    description: "Compile data from multiple sources and deliver custom reports on schedule"
  }
];

const Automation = () => {
  return (
    <PageLayout
      title="Business Automation"
      subtitle="Streamline operations and eliminate manual work with intelligent automation that scales with your business."
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

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Common Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl bg-muted/30">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-display font-bold mb-4">Integrates With Your Stack</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            We connect with 500+ apps including Salesforce, HubSpot, Slack, Google Workspace, Zapier, and more. If you use it, we can automate it.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {["Salesforce", "HubSpot", "Slack", "Google Workspace", "Zapier", "Stripe"].map((app) => (
              <span key={app} className="px-4 py-2 rounded-full bg-background border border-border">
                {app}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Automation;
