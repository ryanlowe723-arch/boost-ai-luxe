import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const systems = [
  { name: "AI Receptionist API", status: "operational", uptime: "99.99%" },
  { name: "Voice Processing", status: "operational", uptime: "99.97%" },
  { name: "Review Generation", status: "operational", uptime: "100%" },
  { name: "Dashboard & Analytics", status: "operational", uptime: "99.95%" },
  { name: "Webhook Delivery", status: "operational", uptime: "99.98%" },
  { name: "SMS Notifications", status: "operational", uptime: "99.96%" }
];

const incidents = [
  {
    date: "January 25, 2026",
    title: "Elevated API Latency",
    status: "resolved",
    description: "Some customers experienced slower response times due to increased traffic. Issue was resolved within 45 minutes."
  },
  {
    date: "January 10, 2026",
    title: "Scheduled Maintenance",
    status: "completed",
    description: "Planned maintenance window for infrastructure upgrades. No customer impact."
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "degraded":
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case "down":
      return <XCircle className="w-5 h-5 text-red-500" />;
    default:
      return <CheckCircle className="w-5 h-5 text-green-500" />;
  }
};

const Status = () => {
  const allOperational = systems.every(s => s.status === "operational");

  return (
    <PageLayout
      title="System Status"
      subtitle="Real-time status of all Oryx services and systems."
      showCTA={false}
    >
      <div className="container mx-auto px-6 py-16">
        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl p-8 text-center mb-12 ${
            allOperational ? 'bg-green-500/10 border border-green-500/20' : 'bg-yellow-500/10 border border-yellow-500/20'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            {allOperational ? (
              <CheckCircle className="w-8 h-8 text-green-500" />
            ) : (
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            )}
            <h2 className="text-2xl font-display font-bold">
              {allOperational ? "All Systems Operational" : "Some Systems Experiencing Issues"}
            </h2>
          </div>
          <p className="text-muted-foreground text-sm">
            Last updated: {new Date().toLocaleString()}
          </p>
        </motion.div>

        {/* System Status Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-xl font-display font-bold mb-6">Services</h2>
          <Card className="border-border/50">
            <CardContent className="p-0">
              {systems.map((system, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-4 ${
                    index !== systems.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(system.status)}
                    <span className="font-medium">{system.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {system.uptime} uptime
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                      system.status === 'operational' 
                        ? 'bg-green-500/10 text-green-600' 
                        : 'bg-yellow-500/10 text-yellow-600'
                    }`}>
                      {system.status}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Incidents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-display font-bold mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <Card key={index} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{incident.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                      incident.status === 'resolved' || incident.status === 'completed'
                        ? 'bg-green-500/10 text-green-600' 
                        : 'bg-yellow-500/10 text-yellow-600'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                  <span className="text-xs text-muted-foreground">{incident.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-lg font-display font-bold mb-2">Stay Informed</h2>
          <p className="text-muted-foreground text-sm">
            Subscribe to status updates to get notified of any service disruptions.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Status;
