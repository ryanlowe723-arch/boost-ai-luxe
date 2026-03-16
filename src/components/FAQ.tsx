import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this replacing my staff?",
    answer: "No. The AI handles overflow, after-hours calls, and lead qualification. Your team stays focused on closing. The system ensures nothing falls through the cracks.",
  },
  {
    question: "What industries do you work with?",
    answer: "We specialise in service businesses that receive inbound calls — HVAC, plumbing, roofing, dental practices, legal firms, auto services, landscaping, electrical, and more. If your business relies on capturing inbound enquiries, we can help.",
  },
  {
    question: "Is there a minimum commitment?",
    answer: "Yes — 3 months. Proper deployment, calibration, and measurable results take time. Most clients stay well beyond that.",
  },
  {
    question: "What happens if call volume increases?",
    answer: "The system scales instantly. 20 calls or 2,000 — no extra staff, no extra cost, no downtime.",
  },
  {
    question: "Do I need technical knowledge?",
    answer: "None. We deploy and manage everything. You get a dashboard and regular strategy sessions. No technical involvement required.",
  },
  {
    question: "How quickly can you deploy?",
    answer: "Most systems are fully deployed within 14 business days. This includes AI receptionist configuration, CRM setup, review automation, Google profile optimisation, testing, and team training. We handle everything — your team doesn't need to lift a finger.",
  },
  {
    question: "What happens to my existing phone system?",
    answer: "Nothing changes for your customers. We integrate seamlessly with your existing phone lines. Calls are answered by your AI receptionist and routed to your team based on rules you set. Same numbers, same experience — just zero missed calls.",
  },
  {
    question: "Can I see a live demo before committing?",
    answer: "Absolutely. Click 'Test The AI Live' at the top of this page to speak with our AI receptionist right now. On your strategy call, we'll also show you a system configured specifically for your industry.",
  },
  {
    question: "What's included in the setup fee?",
    answer: "Everything needed for deployment: AI receptionist configuration and training on your specific services, CRM setup and automation flows, review automation system, Google Business Profile optimisation, call routing rules, team onboarding, and 14 days of monitored optimisation post-launch.",
  },
  {
    question: "Do you offer month-to-month after the initial period?",
    answer: "Yes. After the initial 3-month deployment period, you move to a rolling monthly agreement. No long-term lock-ins. We keep clients by delivering results, not contracts.",
  },
  {
    question: "Is it just an AI phone answering service?",
    answer: "No — the AI Receptionist is one component of a complete revenue infrastructure. We also deploy automated follow-ups, lead reactivation campaigns, review automation, Google Maps optimisation, and conversion-optimised websites. It's the full pipeline, not just one tool.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-foreground">
            Frequently Asked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border/50 rounded-xl px-4 sm:px-6 shadow-sm"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
