import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Revenue Capture",
    subtitle: "AI Receptionist System",
    tagline: "The foundation — capture every inbound lead and never miss revenue again.",
    setup: "£1,975",
    priceWith: "£697",
    priceWithout: "£997",
    popular: false,
    roi: "Potential ROI: 3–8x in 90 days",
    visibleFeatures: [
      "24/7 AI Receptionist (call handling, qualification, booking)",
      "CRM setup & pipeline dashboard",
      "Instant SMS confirmations to customers",
      "Call recording & analytics",
      "Performance reporting dashboard",
      "Google Business Profile audit & basic optimisation",
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
    tagline: "Scale your pipeline — automated follow-ups, lead reactivation, and review generation that compounds your growth.",
    setup: "£3,475",
    priceWith: "£1,097",
    priceWithout: "£1,497",
    popular: true,
    roi: "Potential ROI: 5–10x in 90 days",
    visibleFeatures: [
      "Everything in Revenue Capture, plus:",
      "AI Website Chat (24/7 visitor capture & qualification)",
      "Automated multi-stage SMS & email follow-up sequences",
      "Lead reactivation campaigns (revive old/dead leads automatically)",
      "Review automation (auto-request Google reviews after every job)",
      "Full Google Business Profile optimisation",
      "Monthly strategy call",
    ],
    hiddenFeatures: [
      "Lead source tracking & attribution",
      "Automated email nurturing campaigns",
    ],
  },
  {
    name: "Market Dominator",
    subtitle: "Complete AI + Website System",
    tagline: "Complete market dominance — custom website, SEO, Google Maps, and full revenue attribution. Your competitors won't know what hit them.",
    qualifier: "Limited availability — 4 new clients per month.",
    setup: "£5,975",
    priceWith: "£1,897",
    priceWithout: "£2,497",
    popular: false,
    roi: "Potential ROI: 8–15x in 90 days",
    visibleFeatures: [
      "Everything in Growth Engine, plus:",
      "Custom-built, conversion-optimised revenue website",
      "Strategic SEO service page architecture",
      "Full landing page & funnel ecosystem",
      "Ongoing Google Maps optimisation (posts, photos, Q&A)",
      "Advanced conversion tracking & revenue attribution",
      "Quarterly strategic performance reviews",
      "Priority support & implementation",
      "Ongoing monthly optimisation & advisory",
    ],
    hiddenFeatures: [],
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
          ? "border-primary/40 bg-card shadow-xl shadow-primary/5 md:scale-[1.02] z-10"
          : "border-border/50 bg-card shadow-sm"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-5 sm:p-8 flex flex-col flex-1">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-display font-bold text-foreground tracking-tight">
            {tier.name}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {tier.subtitle}
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground/80 mt-2 leading-relaxed italic">
            {tier.tagline}
          </p>
          {tier.qualifier && (
            <p className="text-[10px] sm:text-[11px] text-primary/70 mt-1.5 font-medium tracking-wide">
              {tier.qualifier}
            </p>
          )}
        </div>

        <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border/40">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              {tier.priceWith}
            </span>
            <span className="text-muted-foreground text-xs sm:text-sm">/mo</span>
          </div>
           <p className="text-[10px] sm:text-xs text-muted-foreground">
            with {tier.setup} setup · or{" "}
            <span className="font-medium text-foreground/70">
              {tier.priceWithout}/mo
            </span>{" "}
            (no setup)
          </p>
          <p className="text-[10px] sm:text-xs text-primary font-medium mt-2">{tier.roi}</p>
        </div>

        <ul className="space-y-2.5 sm:space-y-3 mb-4 flex-1">
          {tier.visibleFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground"
            >
              <Check
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 ${
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
                className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground overflow-hidden"
              >
                <Check
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 ${
                    tier.popular ? "text-primary" : "text-primary/70"
                  }`}
                  strokeWidth={2.5}
                />
                <span>{feature}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {tier.hiddenFeatures.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary font-medium mb-4 sm:mb-6 transition-colors duration-200 cursor-pointer"
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
            href="https://cal.com/oryx-systems/oryxdemo"
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
    <section id="pricing" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Turn Missed Revenue Into Growth —{" "}
            <span className="gradient-text">Starting This Month</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            One missed emergency call could cost you £500–£2,000. Our clients typically recover their full investment within the first month.
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground/70 mt-3 tracking-wide">
            No lock-in after the initial period. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        <p className="text-[10px] sm:text-xs text-muted-foreground/60 text-center mt-6 sm:mt-8">
          Minimum 3-month engagement. Setup + monthly pricing.
        </p>
      </div>
    </section>
  );
};

export default Pricing;