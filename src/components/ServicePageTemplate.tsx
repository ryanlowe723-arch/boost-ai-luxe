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

/* ─── Animated Counter ─── */
const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const num = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isNaN(num)) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return (
    <span ref={ref} className="tabular-nums">
      {isNaN(num) ? value : `${count}${suffix}`}
    </span>
  );
};

/* ─── Interactive Tilt Card ─── */
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

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
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="font-medium text-white/90 text-sm pr-4">{item.question}</span>
        <ChevronDown className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-sm text-white/50 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

/* ─── Pulsing Glow Dot ─── */
const GlowDot = ({ color = "purple" }: { color?: "purple" | "green" }) => (
  <span className="relative flex h-2.5 w-2.5">
    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${color === "green" ? "bg-[#00ffa3]" : "bg-[#b24dff]"}`} />
    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${color === "green" ? "bg-[#00ffa3]" : "bg-[#b24dff]"}`} />
  </span>
);

/* ═══════════════════════════════════════════════════════
   ELITE SERVICE PAGE TEMPLATE
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
    <div className="min-h-screen" style={{ backgroundColor: "#050505", color: "#ffffff" }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-24 overflow-hidden elite-cyber-grid">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full opacity-30" style={{ background: "radial-gradient(ellipse, rgba(178, 77, 255, 0.25) 0%, transparent 70%)" }} />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(ellipse, rgba(0, 255, 163, 0.15) 0%, transparent 65%)" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full elite-glass mb-6">
              <GlowDot />
              <span className="text-xs text-white/60 font-medium tracking-widest uppercase">Service Module</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl">{subheadline}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group">
                <a href="https://cal.com/oryx-systems/oryxdemo" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 font-medium border-white/10 text-white/70 hover:bg-white/5 hover:text-white">
                <a href="tel:+441564335014">Test The AI Live</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE PROBLEM — Bento Grid ─── */}
      <section className="py-24 relative elite-cyber-grid">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5" style={{ color: "#ff6b6b" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#ff6b6b" }}>The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-10">
              Why You're <span className="elite-text-purple">Losing Revenue</span> Right Now
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((p, i) => (
                <TiltCard key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="elite-glass rounded-2xl p-6 h-full hover:border-[#b24dff]/30 transition-all duration-500 group"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255, 107, 107, 0.1)" }}>
                      <span className="text-sm font-bold" style={{ color: "#ff6b6b" }}>{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{p}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE SOLUTION — Feature Showcase ─── */}
      <section className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(178, 77, 255, 0.03) 0%, transparent 50%, rgba(0, 255, 163, 0.02) 100%)" }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <GlowDot />
              <span className="text-xs font-semibold uppercase tracking-widest elite-text-purple">The Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-12">
              How <span className="elite-gradient-text">Oryx</span> Automates This
            </h2>

            {/* Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {howItWorksSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="elite-glass-strong rounded-2xl p-6 text-center group hover:elite-glow-purple transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(178, 77, 255, 0.1)" }}>
                    <step.icon className="w-7 h-7" style={{ color: "#b24dff" }} />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#00ffa3" }}>Step {i + 1}</div>
                  <h3 className="font-display font-semibold text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Flow Diagram */}
            <div className="elite-glass rounded-2xl p-6 overflow-x-auto">
              <div className="flex items-center justify-center gap-2 min-w-max">
                {flowDiagram.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap" style={{ backgroundColor: "rgba(178, 77, 255, 0.1)", color: "#b24dff" }}>
                      {step}
                    </span>
                    {i < flowDiagram.steps.length - 1 && <ArrowRight className="w-4 h-4 shrink-0" style={{ color: "#00ffa3" }} />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section className="py-24 relative elite-cyber-grid">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-8">What You Get</h2>
            <div className="elite-glass-strong rounded-2xl p-8">
              <ul className="space-y-4">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#00ffa3" }} />
                    <span className="text-white/80 text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE RESULT — Glowing ROI Dashboard ─── */}
      <section className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0, 255, 163, 0.04) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <GlowDot color="green" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00ffa3" }}>The Result</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-10">
              Typical <span style={{ color: "#00ffa3" }}>Outcomes</span>
            </h2>

            {/* ROI Dashboard Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {typicalOutcomes.map((o, i) => (
                <TiltCard key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-2xl p-6 h-full group hover:border-[#00ffa3]/30 transition-all duration-500"
                    style={{
                      background: "rgba(0, 255, 163, 0.03)",
                      border: "1px solid rgba(0, 255, 163, 0.1)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(0, 255, 163, 0.1)" }}>
                        <span className="text-xs font-bold" style={{ color: "#00ffa3" }}>↑</span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{o}</p>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>

            <p className="text-xs text-white/25 italic max-w-lg">
              Results vary based on call volume, industry, and existing processes. Figures above represent typical ranges observed across deployments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── MOCK UI SCREENS ─── */}
      <section className="py-24 relative elite-cyber-grid">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight text-center text-white mb-10">What It Looks Like</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mockScreens.map((screen, i) => (
                <TiltCard key={i}>
                  <div className="elite-glass-strong rounded-2xl overflow-hidden elite-glow-purple">
                    <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(178, 77, 255, 0.1)", background: "rgba(178, 77, 255, 0.03)" }}>
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(255, 107, 107, 0.5)" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(255, 200, 50, 0.5)" }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(0, 255, 163, 0.5)" }} />
                      </div>
                      <span className="text-xs text-white/50 font-medium ml-2">{screen.title}</span>
                    </div>
                    <div className="p-5 space-y-3">
                      {screen.lines.map((line, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "rgba(178, 77, 255, 0.4)" }} />
                          <span className="text-sm text-white/60">{line}</span>
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
      <section className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(178, 77, 255, 0.02), transparent)" }} />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xl font-display font-bold mb-5 text-white">Who This Is For</h3>
              <div className="elite-glass-strong rounded-2xl p-6">
                <ul className="space-y-3">
                  {whoIsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#00ffa3" }} />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="text-xl font-display font-bold mb-5 text-white/60">Not a Fit If…</h3>
              <div className="elite-glass rounded-2xl p-6">
                <ul className="space-y-3">
                  {notAFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <HelpCircle className="w-4 h-4 mt-0.5 shrink-0 text-white/25" />
                      <span className="text-white/40">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE NEED FROM YOU ─── */}
      <section className="py-24 relative elite-cyber-grid">
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white mb-8">What We Need From You</h2>
            <div className="elite-glass-strong rounded-2xl p-8">
              <ul className="space-y-4">
                {onboarding.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ backgroundColor: "rgba(178, 77, 255, 0.15)", color: "#b24dff" }}>{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(178, 77, 255, 0.04) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-display font-bold tracking-tight text-center text-white mb-10">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQAccordion key={i} item={faq} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(178, 77, 255, 0.06), rgba(0, 255, 163, 0.03))" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-white">
              Ready to <span className="elite-gradient-text">Deploy</span>?
            </h2>
            <p className="text-white/40 mb-10 max-w-lg mx-auto">
              We'll map your inbound flow and show exactly where revenue is slipping through.
            </p>
            <Button asChild size="lg" className="btn-primary-premium text-primary-foreground rounded-full px-10 font-semibold group text-base">
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
