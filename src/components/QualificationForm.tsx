import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const revenueOptions = ["£0–£10k", "£10k–£25k", "£25k–£50k", "£50k+"];
const callVolumeOptions = ["0–20", "20–50", "50–100", "100+"];
const decisionMakerOptions = ["Yes", "No"];

const QualificationForm = () => {
  const [revenue, setRevenue] = useState("");
  const [callVolume, setCallVolume] = useState("");
  const [industry, setIndustry] = useState("");
  const [decisionMaker, setDecisionMaker] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [qualified, setQualified] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isQualified =
      !["£0–£10k"].includes(revenue) && decisionMaker === "Yes";
    setQualified(isQualified);
    setSubmitted(true);
  };

  const isComplete = revenue && callVolume && industry.trim() && decisionMaker;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              Qualification
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground mb-3">
            Before You Book
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We deploy revenue infrastructure for established service businesses.
            Complete this brief assessment to confirm alignment.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm space-y-6"
            >
              {/* Revenue */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Monthly revenue range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {revenueOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setRevenue(opt)}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                        revenue === opt
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border/50 text-muted-foreground hover:border-border"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Call Volume */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Approximate monthly inbound call volume
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {callVolumeOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setCallVolume(opt)}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                        callVolume === opt
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border/50 text-muted-foreground hover:border-border"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Industry
                </label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Roofing, Dental, HVAC, Legal"
                  maxLength={100}
                  className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Decision Maker */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Are you the decision maker?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {decisionMakerOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDecisionMaker(opt)}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                        decisionMaker === opt
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border/50 text-muted-foreground hover:border-border"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!isComplete}
                className="w-full btn-primary-premium text-primary-foreground rounded-full font-semibold group disabled:opacity-40"
              >
                Continue to Booking
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.form>
          ) : qualified ? (
            <motion.div
              key="qualified"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-primary/20 rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                You're a strong fit.
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Based on your profile, our revenue infrastructure is designed for businesses like yours.
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
          ) : (
            <motion.div
              key="not-qualified"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border/50 rounded-2xl p-8 text-center shadow-sm"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Thank you for your interest.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                This system is currently prioritised for established service businesses
                generating consistent inbound demand. We may be able to revisit once
                your business reaches that stage.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QualificationForm;
