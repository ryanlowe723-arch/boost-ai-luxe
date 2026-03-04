import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface FlowStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FlowDiagram {
  steps: string[];
}

interface MockScreen {
  title: string;
  lines: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  headline: string;
  subheadline: string;
  problemTitle?: string;
  problems: string[];
  howItWorksSteps: FlowStep[];
  flowDiagram: FlowDiagram;
  deliverables: string[];
  typicalOutcomes: string[];
  mockScreens: MockScreen[];
  whoIsFor: string[];
  notAFit: string[];
  onboarding: string[];
  faqs: FAQItem[];
}

const FAQAccordion = ({ item }: { item: FAQItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-medium text-foreground text-sm pr-4">{item.question}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const ServicePageTemplate = ({
  headline,
  subheadline,
  problems,
  howItWorksSteps,
  flowDiagram,
  deliverables,
  typicalOutcomes,
  mockScreens,
  whoIsFor,
  notAFit,
  onboarding,
  faqs,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-texture" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[300px] rounded-full opacity-30"
            style={{ background: "radial-gradient(ellipse, hsl(265 60% 92%) 0%, transparent 70%)" }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-4">
              {headline}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group">
                <a href="https://cal.com/oryx-systems/oryxdemo" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-8">The Problem</h2>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
              {howItWorksSteps.map((step, i) => (
                <Card key={i} className="border-border/50 bg-card/50 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Step {i + 1}</div>
                    <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Flow Diagram */}
            <div className="bg-card border border-border/50 rounded-2xl p-6 overflow-x-auto">
              <div className="flex items-center justify-center gap-2 min-w-max">
                {flowDiagram.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm whitespace-nowrap">{step}</span>
                    {i < flowDiagram.steps.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-8">What You Get</h2>
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typical Outcomes */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-8">Typical Outcomes</h2>
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <ul className="space-y-3">
                {typicalOutcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground/60 mt-6 italic">
                Results vary based on call volume, industry, and existing processes. Figures above represent typical ranges observed across deployments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mock UI Screens */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight text-center mb-10">What It Looks Like</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mockScreens.map((screen, i) => (
                <Card key={i} className="border-border/50 bg-card/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-muted/50 px-4 py-3 border-b border-border/40 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium ml-2">{screen.title}</span>
                    </div>
                    <div className="p-5 space-y-3">
                      {screen.lines.map((line, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary/30 shrink-0" />
                          <span className="text-sm text-muted-foreground">{line}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For / Not a Fit */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xl font-display font-bold mb-5">Who This Is For</h3>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {whoIsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="text-xl font-display font-bold mb-5">Not a Fit If…</h3>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {notAFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <HelpCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Need From You */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-8">What We Need From You</h2>
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <ul className="space-y-3">
                {onboarding.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-semibold text-primary">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQAccordion key={i} item={faq} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Book a Strategy Call</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We'll map your inbound flow and show where revenue is slipping.
            </p>
            <Button asChild size="lg" className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group">
              <a href="https://cal.com/oryx-systems/oryxdemo" target="_blank" rel="noopener noreferrer">
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

export default ServicePageTemplate;
