import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    company: "Metro Dental Group",
    industry: "Healthcare",
    challenge: "Missing 40% of after-hours calls",
    result: "95% call capture rate, 30% increase in appointments",
    description: "Multi-location dental practice struggling with call volume implemented our AI Receptionist across all locations."
  },
  {
    company: "Apex Legal Services",
    industry: "Legal",
    challenge: "Slow lead response time",
    result: "Response time reduced from 4 hours to 30 seconds",
    description: "Law firm needed to qualify leads faster without adding staff. Our AI handles initial intake 24/7."
  },
  {
    company: "Summit Home Services",
    industry: "Home Services",
    challenge: "Low online review count",
    result: "500% increase in Google reviews in 90 days",
    description: "HVAC company used our Review Generation system to build a dominant local presence."
  },
  {
    company: "Brightside Wellness",
    industry: "Health & Wellness",
    challenge: "Outdated website hurting conversions",
    result: "3x increase in online bookings",
    description: "Wellness center redesigned their digital presence with our web design and automation services."
  }
];

const CaseStudies = () => {
  return (
    <PageLayout
      title="Case Studies"
      subtitle="Real results from real businesses. See how companies like yours are growing with Oryx."
    >
      <div className="container mx-auto px-6 py-16">
        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-border/50 bg-card/50 h-full hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{study.company}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{study.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Challenge</span>
                      <p className="text-sm font-medium">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Result</span>
                      <p className="text-sm font-medium text-primary">{study.result}</p>
                    </div>
                  </div>

                  <button className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    Read full case study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">Aggregate Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "32+", label: "Businesses Served" },
              { value: "95%", label: "Client Retention" },
              { value: "12,000+", label: "Calls/Month" },
              { value: "40%", label: "Avg. Lead Increase" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
