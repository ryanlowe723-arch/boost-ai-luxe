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
    answer:
      "No. Our AI receptionist operates alongside your team, handling overflow, after-hours calls, and lead qualification. Your staff remain focused on high-value work while the system ensures zero missed opportunities.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We deploy revenue infrastructure for service-based businesses — HVAC, roofing, dental, legal, landscaping, auto services, and similar industries with consistent inbound call volume.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "Yes. All engagements carry a 3-month minimum. This allows sufficient time for full deployment, calibration, and measurable results. Most clients continue well beyond the initial period.",
  },
  {
    question: "What happens if call volume increases?",
    answer:
      "The system scales automatically. Whether you handle 20 calls or 2,000 per month, the infrastructure adapts without additional staffing costs or operational overhead.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "None whatsoever. We engineer, deploy, and manage everything. You receive a performance dashboard and regular strategy sessions — no technical involvement required on your end.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground">
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
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm"
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
