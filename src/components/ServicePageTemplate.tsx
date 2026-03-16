import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, HelpCircle, ChevronDown, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
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

/* ─── Interactive Tilt Card ─── */
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── FAQ Accordion ─── */
const FAQAccordion = ({ item }: { item: FAQItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="elite-glass rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/[0.02] transition-colors"
      >
        <span className="font-medium text-foreground text-sm pr-4">{item.question}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

/* ─── 3D Hero Visual ─── */
const HeroVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(178, 77, 255, 0.15) 0%, transparent 70%)" }}
      />

      {/* Orbiting rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid rgba(178, 77, 255, ${0.12 - i * 0.03})`,
            transform: `scale(${0.6 + i * 0.2}) rotateX(${60 + i * 5}deg)`,
          }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Center orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(178, 77, 255, 0.15) 0%, rgba(168, 85, 247, 0.08) 100%)",
          border: "1px solid rgba(178, 77, 255, 0.2)",
          boxShadow: "0 8px 40px rgba(178, 77, 255, 0.12), inset 0 0 30px rgba(178, 77, 255, 0.05)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#b24dff", boxShadow: "0 0 20px rgba(178, 77, 255, 0.4)" }} />
        </div>
      </motion.div>

      {/* Orbiting nodes */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute top-1/2 left-1/2"
          style={{ transformOrigin: "0 0" }}
          animate={{ rotate: [i * 90, i * 90 + 360] }}
          transition={{ duration: 15 + i * 3, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translateX(${60 + i * 20}px)`,
              backgroundColor: "rgba(178, 77, 255, 0.3)",
              boxShadow: "0 0 12px rgba(178, 77, 255, 0.2)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   ELITE SERVICE PAGE TEMPLATE — LIGHT MODE
   ═══════════════════════════════════════════════════════ */
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-24 sm:pt-32 pb-2 sm:pb-4 overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full opacity-50"
            style={{ background: "radial-gradient(ellipse, hsl(265 60% 95%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full opacity-30"
            style={{ background: "radial-gradient(ellipse, hsl(280 50% 96%) 0%, transparent 65%)" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >

              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6">
                {headline}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">{subheadline}</p>

            </motion.div>

            {/* 3D Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="hidden lg:block"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM — Bento Grid ─── */}
      <section className="py-4 sm:py-8 relative elite-cyber-grid">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-destructive/70" />
              <span className="text-xs font-semibold uppercase tracking-widest text-destructive/70">The Problem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6 sm:mb-10">
              Why You're <span className="elite-text-purple">Losing Revenue</span> Right Now
            </h2>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {problems.map((p, i) => (
                <TiltCard key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="elite-glass rounded-2xl p-4 sm:p-6 h-full hover:border-primary/20 hover:shadow-lg transition-all duration-500 group"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 bg-destructive/5">
                      <span className="text-sm font-bold text-destructive/60">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover:text-foreground transition-colors">{p}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE SOLUTION — Feature Showcase ─── */}
      <section className="py-8 sm:py-12 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(265 50% 97%) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#b24dff" }} />
              <span className="text-xs font-semibold uppercase tracking-widest elite-text-purple">The Solution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-8 sm:mb-12">
              How <span className="elite-gradient-text">Oryx</span> Automates This
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-12">
              {howItWorksSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="elite-glass-strong rounded-2xl p-4 sm:p-6 text-center group hover:elite-glow-purple transition-all duration-500"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-primary mb-1 sm:mb-2">Step {i + 1}</div>
                  <h3 className="font-display font-semibold text-foreground mb-1 sm:mb-2 text-xs sm:text-sm">{step.title}</h3>
                  <p className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Flow Diagram */}
            <div className="elite-glass rounded-2xl p-4 sm:p-6 overflow-x-auto">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 min-w-max">
                {flowDiagram.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                    <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap bg-primary/5 text-primary">
                      {step}
                    </span>
                    {i < flowDiagram.steps.length - 1 && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 text-primary/40" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section className="py-16 sm:py-20 lg:py-24 relative elite-cyber-grid">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-6 sm:mb-8">What You Get</h2>
            <div className="elite-glass-strong rounded-2xl p-5 sm:p-8">
              <ul className="space-y-3 sm:space-y-4">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0 text-primary" />
                    <span className="text-foreground/80 text-xs sm:text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE RESULT — ROI Dashboard ─── */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(265 50% 97%) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full animate-pulse bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">The Result</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6 sm:mb-10">
              Typical <span className="elite-gradient-text">Outcomes</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-5 mb-6 sm:mb-8">
              {typicalOutcomes.map((o, i) => (
                <TiltCard key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="elite-glass rounded-2xl p-4 sm:p-6 h-full group hover:elite-glow-purple hover:border-primary/20 transition-all duration-500"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 bg-primary/5">
                        <span className="text-xs font-bold text-primary">↑</span>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover:text-foreground transition-colors">{o}</p>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>

            <p className="text-[10px] sm:text-xs text-muted-foreground/40 italic max-w-lg">
              Results vary based on call volume, industry, and existing processes. Figures above represent typical ranges observed across deployments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── MOCK UI SCREENS ─── */}
      <section className="py-16 sm:py-20 lg:py-24 relative elite-cyber-grid">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-center mb-6 sm:mb-10">What It Looks Like</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {mockScreens.map((screen, i) => (
                <TiltCard key={i}>
                  <div className="elite-glass-strong rounded-2xl overflow-hidden elite-glow-purple">
                    <div className="px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-border/30 bg-muted/20">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent/30" />
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/30" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-muted-foreground font-medium ml-2">{screen.title}</span>
                    </div>
                    <div className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                      {screen.lines.map((line, j) => (
                        <div key={j} className="flex items-center gap-2 sm:gap-3">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/20 shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR / NOT A FIT ─── */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, hsl(265 40% 97%) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-lg sm:text-xl font-display font-bold mb-4 sm:mb-5">Who This Is For</h3>
              <div className="elite-glass-strong rounded-2xl p-4 sm:p-6">
                <ul className="space-y-2.5 sm:space-y-3">
                  {whoIsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="text-lg sm:text-xl font-display font-bold mb-4 sm:mb-5 text-muted-foreground">Not a Fit If…</h3>
              <div className="elite-glass rounded-2xl p-4 sm:p-6">
                <ul className="space-y-2.5 sm:space-y-3">
                  {notAFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm">
                      <HelpCircle className="w-4 h-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE NEED FROM YOU ─── */}
      <section className="py-16 sm:py-20 lg:py-24 relative elite-cyber-grid">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-6 sm:mb-8">What We Need From You</h2>
            <div className="elite-glass-strong rounded-2xl p-5 sm:p-8">
              <ul className="space-y-3 sm:space-y-4">
                {onboarding.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] sm:text-xs font-bold bg-primary/10 text-primary">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(265 40% 97%) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-center mb-6 sm:mb-10">Frequently Asked Questions</h2>
            <div className="space-y-2.5 sm:space-y-3">
              {faqs.map((faq, i) => (
                <FAQAccordion key={i} item={faq} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4">
              Ready to <span className="elite-gradient-text">Deploy</span>?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-lg mx-auto">
              We'll map your inbound flow and show exactly where revenue is slipping through.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
