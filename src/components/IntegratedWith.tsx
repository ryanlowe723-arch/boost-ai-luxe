import { motion } from "framer-motion";

const partners = [
  "Twilio", "OpenAI", "Google Cloud", "Make", "Stripe", "HubSpot"
];

const IntegratedWith = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground/60 text-center mb-8">
          Integrated With
        </p>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ opacity: 1 }}
              className="text-muted-foreground/40 font-display font-semibold text-base tracking-tight hover:text-foreground transition-all duration-300 cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedWith;
