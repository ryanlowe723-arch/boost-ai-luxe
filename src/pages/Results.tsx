import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = ["All", "HVAC", "Plumbing", "Electrical", "Solar", "Roofing", "Dental", "Landscaping", "Auto Services", "Cleaning"];

const outcomeCards = [
  { industry: "HVAC", situation: "38% of inbound calls unanswered during peak season", deployed: "AI receptionist, missed-call SMS, CRM pipeline, review automation", outcome: "0 missed calls, +22% booked jobs, 96 reactivated leads", timeframe: "First 30 days", label: "Anonymised deployment" },
  { industry: "Plumbing", situation: "After-hours calls going to voicemail, slow response times", deployed: "24/7 AI answering, after-hours routing, automated follow-up", outcome: "100% answer rate, +17% booked jobs, 43 new 5-star reviews", timeframe: "60 days", label: "Anonymised deployment" },
  { industry: "Electrical", situation: "High call volume but no pipeline visibility", deployed: "AI receptionist, CRM pipeline, booking integration, revenue dashboard", outcome: "29% less admin workload, +19% conversion rate, <30s response", timeframe: "45 days", label: "Anonymised deployment" },
  { industry: "Solar", situation: "Inbound spikes overwhelming office staff during campaigns", deployed: "AI call triage, lead qualification, automated booking routing", outcome: "100% call capture at peak, 40% less manual handling, +18% consultations", timeframe: "First campaign cycle", label: "Anonymised deployment" },
  { industry: "Roofing", situation: "Seasonal demand spikes with no overflow handling", deployed: "AI receptionist, overflow routing, SMS follow-up automation", outcome: "Zero missed calls during storm season, +21% quote requests", timeframe: "First 30 days", label: "Illustrative example" },
  { industry: "Dental", situation: "Receptionist overwhelmed with appointment requests and rescheduling", deployed: "AI call answering, calendar integration, patient follow-up", outcome: "35% reduction in front desk calls, +14% new patient bookings", timeframe: "60 days", label: "Illustrative example" },
  { industry: "Landscaping", situation: "Spring surge causing 40%+ missed call rate", deployed: "AI receptionist, quote request automation, CRM pipeline", outcome: "Missed calls eliminated, +26% quote-to-job conversion", timeframe: "First season", label: "Illustrative example" },
  { industry: "Auto Services", situation: "Walk-ins prioritised over phone enquiries, leads lost", deployed: "AI call handling, automated booking, follow-up sequences", outcome: "+19% booked appointments, 30% faster response time", timeframe: "45 days", label: "Illustrative example" },
  { industry: "Cleaning", situation: "No follow-up system for one-time clients to become recurring", deployed: "CRM automation, re-engagement sequences, review requests", outcome: "22% of one-time clients converted to recurring, 4.8★ avg rating", timeframe: "90 days", label: "Illustrative example" },
  { industry: "HVAC", situation: "Multi-location business with inconsistent call handling", deployed: "Unified AI receptionist across 4 locations, centralised CRM", outcome: "Consistent 100% answer rate, +15% cross-location bookings", timeframe: "60 days", label: "Illustrative example" },
  { industry: "Plumbing", situation: "Emergency calls being missed overnight and on weekends", deployed: "24/7 AI with emergency triage logic, priority routing", outcome: "100% emergency call capture, 45% revenue increase from after-hours", timeframe: "First 30 days", label: "Anonymised deployment" },
  { industry: "Solar", situation: "High ad spend but poor lead-to-consultation conversion", deployed: "AI qualification, automated booking, pipeline visibility", outcome: "+24% consultation rate, 30% reduction in cost per acquisition", timeframe: "First campaign", label: "Illustrative example" },
  { industry: "Roofing", situation: "Paper-based quoting with no follow-up system", deployed: "CRM pipeline, automated quote follow-ups, review automation", outcome: "3x faster quote turnaround, +18% close rate", timeframe: "60 days", label: "Illustrative example" },
  { industry: "Electrical", situation: "Growing team with no standardised sales process", deployed: "CRM automation, task assignment, lead scoring", outcome: "40% less admin time, consistent follow-up across team", timeframe: "45 days", label: "Illustrative example" },
  { industry: "Dental", situation: "Low online review count compared to local competitors", deployed: "Automated review requests, satisfaction pre-filter, multi-platform", outcome: "78 new reviews in 60 days, rating improved from 4.1 to 4.7", timeframe: "60 days", label: "Illustrative example" },
  { industry: "Landscaping", situation: "No visibility into which marketing channels drive revenue", deployed: "Revenue attribution dashboard, CRM pipeline, lead source tracking", outcome: "Clear ROI visibility, reallocated 30% of ad spend to top channel", timeframe: "90 days", label: "Illustrative example" },
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
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? outcomeCards : outcomeCards.filter(c => c.industry === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-texture" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] rounded-full opacity-30" style={{ background: "radial-gradient(ellipse, hsl(265 60% 92%) 0%, transparent 70%)" }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} className="max-w-3xl">
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">Proven Results</span>
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
              <Button asChild size="lg" className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group">
                <a href="https://calendly.com/ryanlowe723/oryx-ai-demo-call" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button asChild size="lg" className="btn-ghost-premium rounded-full px-8 font-medium text-foreground">
                <Link to="/#how-it-works">How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Chips + Outcome Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">Deployment Outcomes</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground">
              Measured Outcomes From Real Deployments
            </h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
              Results labelled as anonymised or illustrative. Outcomes vary based on call volume, industry, and existing processes.
            </p>
          </motion.div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setActiveFilter(ind)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeFilter === ind
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{card.industry}</span>
                  <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wide">{card.label}</span>
                </div>
                <div className="mb-3">
                  <div className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-destructive/70" /> Situation
                  </div>
                  <p className="text-sm text-muted-foreground">{card.situation}</p>
                </div>
                <div className="mb-3">
                  <div className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-primary" /> Deployed
                  </div>
                  <p className="text-sm text-muted-foreground">{card.deployed}</p>
                </div>
                <div className="mb-3">
                  <div className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" /> Outcome
                  </div>
                  <p className="text-sm text-muted-foreground">{card.outcome}</p>
                </div>
                <div className="pt-3 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">Timeframe: {card.timeframe}</span>
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
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground text-center mb-10">
              Who This Works Best For
            </h2>
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4">
                {qualifications.map((item, i) => (
                  <motion.li key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 text-foreground">
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Ready to See What Your Missed Calls Are Costing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We'll calculate your potential revenue impact live.
            </p>
            <Button asChild size="lg" className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group">
              <a href="https://calendly.com/ryanlowe723/oryx-ai-demo-call" target="_blank" rel="noopener noreferrer">
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
