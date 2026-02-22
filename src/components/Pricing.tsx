import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    subtitle: "AI Receptionist System",
    setup: "£1,975",
    priceWith: "£697",
    priceWithout: "£997",
    popular: false,
    features: [
      "AI receptionist — 24/7 call answering",
      "Lead capture & qualification",
      "Appointment booking",
      "Call summaries & transcripts",
      "Basic CRM integration",
      "Email & SMS notifications",
    ],
  },
  {
    name: "Growth",
    subtitle: "Full Automation System",
    setup: "£3,475",
    priceWith: "£1,097",
    priceWithout: "£1,497",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "GoHighLevel CRM automation",
      "Automated follow-up sequences",
      "Review request automation",
      "Pipeline & deal tracking",
      "Multi-channel outreach",
      "Dedicated onboarding specialist",
    ],
  },
  {
    name: "Authority",
    subtitle: "Complete AI + Website System",
    setup: "£5,975",
    priceWith: "£1,897",
    priceWithout: "£2,497",
    popular: false,
    features: [
      "Everything in Growth, plus:",
      "High-converting custom website",
      "SEO-optimised landing pages",
      "Conversion tracking & analytics",
      "Priority support & strategy calls",
      "Full brand & funnel buildout",
      "Quarterly performance reviews",
    ],
  },
];

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
            Invest in Growth,{" "}
            <span className="gradient-text">Not Guesswork</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with setup + monthly. Every plan includes onboarding, training, and ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
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
                    without
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
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
                </ul>

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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
