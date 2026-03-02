import { motion } from "framer-motion";
import { ArrowRight, Phone, TrendingUp, Zap, BarChart3, CheckCircle2, Building2, Flame, Droplets, BoltIcon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    icon: Flame,
    industry: "HVAC Contractor",
    size: "3 locations",
    revenue: "£180k–£250k/month",
    problem: "38% of inbound calls went unanswered during peak season. No structured follow-up system.",
    deployment: [
      "AI receptionist installed across all lines",
      "Missed-call SMS automation activated",
      "CRM pipeline configured",
      "Review automation enabled",
    ],
    outcomes: [
      "0 missed calls within 72 hours",
      "+22% increase in booked jobs",
      "96 reactivated leads",
      "Google rating improved from 4.2 to 4.8",
    ],
    revenueImpact: "£14,000–£21,000 additional captured revenue in first 30 days.",
  },
  {
    icon: Droplets,
    industry: "Plumbing & Drainage",
    size: "Single location",
    revenue: "£95k/month",
    problem: "After-hours calls going to voicemail. Slow response times. Low review volume.",
    deployment: [
      "24/7 AI call answering",
      "After-hours routing",
      "Automated follow-up sequence",
      "Review automation",
    ],
    outcomes: [
      "100% call answer rate",
      "+17% increase in booked jobs",
      "43 new 5-star reviews in 60 days",
    ],
    revenueImpact: "£6,000–£9,000 additional monthly revenue.",
  },
  {
    icon: BoltIcon,
    industry: "Electrical Contractor",
    size: "2 locations",
    revenue: "£140k/month",
    problem: "High call volume but no pipeline visibility. Manual admin slowing team down.",
    deployment: [
      "AI receptionist",
      "CRM pipeline build",
      "Booking integration",
      "Revenue dashboard",
    ],
    outcomes: [
      "29% reduction in admin workload",
      "+19% improvement in conversion rate",
      "Response time under 30 seconds",
    ],
    revenueImpact: "£10,000+ additional monthly revenue.",
  },
  {
    icon: Sun,
    industry: "Solar Installation Company",
    size: "Regional operator",
    revenue: "£300k/month",
    problem: "Inbound spikes overwhelming office staff during campaigns.",
    deployment: [
      "AI call triage",
      "Lead qualification logic",
      "Automated booking routing",
      "Follow-up automation",
    ],
    outcomes: [
      "100% call capture during peak periods",
      "40% reduction in manual call handling",
      "18% uplift in booked consultations",
    ],
    revenueImpact: "£25,000+ additional monthly pipeline value.",
  },
];

const stats = [
  { value: "30+", label: "Businesses Deployed" },
  { value: "3,800+", label: "Calls Managed Monthly" },
  { value: "15–25%", label: "Avg Increase in Booked Jobs" },
  { value: "99.9%", label: "System Uptime" },
];

const qualifications = [
  "Businesses generating 50+ inbound calls per week",
  "Operators doing £50k+ monthly revenue",
  "Teams looking to reduce admin workload",
  "Companies serious about measurable growth",
];

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-texture" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[300px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(ellipse, hsl(265 60% 92%) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
              Proven Results
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-4">
              Real Revenue Impact Across Multiple Industries
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              See how service operators improved inbound capture, reduced missed calls, and increased booked revenue using Oryx revenue infrastructure.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8">
              Systems deployed across service businesses handling thousands of inbound calls monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group"
              >
                <a
                  href="https://calendly.com/ryanlowe723/oryx-ai-demo-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="btn-ghost-premium rounded-full px-8 font-medium text-foreground"
              >
                <Link to="/#how-it-works">How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground">
              Measured Outcomes From Real Deployments
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.industry}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <study.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground tracking-tight">
                      {study.industry}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {study.size} · {study.revenue}
                    </p>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-5">
                  <div className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-destructive/70" />
                    Problem
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Deployment */}
                <div className="mb-5">
                  <div className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    Deployment
                  </div>
                  <ul className="space-y-1">
                    {study.deployment.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="mb-5">
                  <div className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    Outcome
                  </div>
                  <ul className="space-y-1">
                    {study.outcomes.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary/60 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Revenue Impact */}
                <div className="pt-4 border-t border-border/40">
                  <p className="text-sm font-display font-bold text-foreground">
                    Estimated Impact:{" "}
                    <span className="gradient-text">{study.revenueImpact}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-16 stats-section">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl font-display font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground mb-6">
              Revenue Infrastructure — Not Just Call Answering
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Oryx systems are designed to capture, qualify, and convert inbound demand — not simply answer phones. For service operators already generating consistent inbound calls, the difference becomes measurable within weeks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qualification Filter */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground text-center mb-10">
              Who This Works Best For
            </h2>
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4">
                {qualifications.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Ready to See What Your Missed Calls Are Costing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We'll calculate your potential revenue impact live.
            </p>
            <Button
              asChild
              size="lg"
              className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group"
            >
              <a
                href="https://calendly.com/ryanlowe723/oryx-ai-demo-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;
