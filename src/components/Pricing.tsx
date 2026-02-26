import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Revenue Capture",
    subtitle: "AI Receptionist System",
    positioning: "Ideal for businesses missing 10+ calls per month.",
    setup: "£1,975",
    priceWith: "£697",
    priceWithout: "£997",
    popular: false,
    visibleFeatures: [
      "24/7 AI receptionist — zero missed calls",
      "Intelligent lead qualification & routing",
      "Seamless appointment booking integration",
      "Instant missed-call recovery automation",
      "CRM architecture & pipeline build",
      "Performance reporting dashboard",
    ],
    hiddenFeatures: [
      "Custom call script for your business",
      "Call summaries & full transcripts",
      "Custom pipeline build",
    ],
  },
  {
    name: "Growth Engine",
    subtitle: "Full Automation System",
    positioning: "For operators ready to systemise and scale.",
    setup: "£3,475",
    priceWith: "£1,097",
    priceWithout: "£1,497",
    popular: true,
    visibleFeatures: [
      "Everything in Revenue Capture, plus:",
      "Full CRM automation deployment",
      "Multi-stage pipeline & opportunity tracking",
      "Automated SMS & email follow-up sequences",
      "Lead reactivation & re-engagement workflows",
      "Monthly revenue strategy session",
    ],
    hiddenFeatures: [
      "Automated Google review generation",
      "Lead source tracking & attribution",
      "Automated email nurturing campaigns",
    ],
  },
  {
    name: "Market Dominator",
    subtitle: "Complete AI + Website System",
    positioning: "For established service businesses aggressively expanding market share.",
    qualifier: "Limited availability — 4 new clients per month.",
    setup: "£5,975",
    priceWith: "£1,897",
    priceWithout: "£2,497",
    popular: false,
    visibleFeatures: [
      "Everything in Growth Engine, plus:",
      "Custom-built, conversion-optimised website",
      "Strategic SEO service page architecture",
      "Full funnel & landing page ecosystem",
      "Advanced conversion tracking & revenue attribution",
      "Quarterly strategic performance review",
    ],
    hiddenFeatures: [
      "Ongoing revenue optimisation & advisory",
      "Dedicated optimisation roadmap",
      "Priority implementation & support",
    ],
  },
];

const PricingCard = ({ tier, index }: { tier: typeof tiers[number]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      key={tier.name}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={`relative rounded-2xl border flex flex-col ${
        tier.popular
          ? "border-primary/40 bg-card shadow-xl shadow-primary/5 scale-[1.02] z-10"
          : "border-border/50 bg-card shadow-sm"
      }`}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-display font-bold text-foreground tracking-tight">
            {tier.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {tier.subtitle}
          </p>
          <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed italic">
            {tier.positioning}
          </p>
          {tier.qualifier && (
            <p className="text-[11px] text-primary/70 mt-1.5 font-medium tracking-wide">
              {tier.qualifier}
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-8 pb-8 border-b border-border/40">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-display font-bold text-foreground tracking-tight">
              {tier.priceWith}
            </span>
            <span className="text-muted-foreground text-sm">/mo</span>
          </div>
           <p className="text-xs text-muted-foreground">
            with {tier.setup} setup · or{" "}
            <span className="font-medium text-foreground/70">
              {tier.priceWithout}/mo
            </span>{" "}
            (no setup)
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-4 flex-1">
          {tier.visibleFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <Check
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  tier.popular ? "text-primary" : "text-primary/70"
                }`}
                strokeWidth={2.5}
              />
              <span>{feature}</span>
            </li>
          ))}

          <AnimatePresence>
            {expanded && tier.hiddenFeatures.map((feature) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex items-start gap-3 text-sm text-muted-foreground overflow-hidden"
              >
                <Check
                  className={`w-4 h-4 mt-0.5 shrink-0 ${
                    tier.popular ? "text-primary" : "text-primary/70"
                  }`}
                  strokeWidth={2.5}
                />
                <span>{feature}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {/* Toggle */}
        {tier.hiddenFeatures.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary font-medium mb-6 transition-colors duration-200 cursor-pointer"
          >
            {expanded ? (
              <>
                Hide Full Feature Breakdown
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                See Full Feature Breakdown
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        )}

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className={`w-full rounded-full font-semibold group ${
            tier.popular
              ? "btn-primary-premium text-primary-foreground"
              : "bg-muted hover:bg-muted/80 text-foreground"
          }`}
        >
          <a
            href="https://calendly.com/ryanlowe723/oryx-ai-demo-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Turn Missed Calls Into Revenue —{" "}
            <span className="gradient-text">Starting This Month</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
            Most clients recover 3–10x their investment in the first 60 days.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-3 tracking-wide">
            Minimum 3-month engagement. Setup + monthly pricing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
