import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Dental Practice Owner",
    content:
      "The AI receptionist has been a game-changer. We went from missing 30% of calls to capturing every single lead. Our bookings increased dramatically in just 3 months.",
    rating: 5,
    image: "SM",
  },
  {
    name: "David Chen",
    role: "Auto Group CEO",
    content:
      "The ROI speaks for itself. We've seen a 400% increase in booked appointments. The AI handles calls so naturally, customers don't even realize it's not human.",
    rating: 5,
    image: "DC",
  },
  {
    name: "Jessica Williams",
    role: "Real Estate Director",
    content:
      "Not only did they build us a stunning website, but the AI handles our after-hours inquiries perfectly. It's like having a 24/7 sales team.",
    rating: 5,
    image: "JW",
  },
  {
    name: "Marcus Thompson",
    role: "Roofing Company Owner",
    content:
      "Storm season used to mean missed calls and lost jobs. Now the AI books estimates 24/7, even at 2 AM during emergencies. Solid system, though I wish it integrated with our CRM better.",
    rating: 4,
    image: "MT",
  },
  {
    name: "Linda Perez",
    role: "HVAC Business Owner",
    content:
      "During summer, we were drowning in service calls. The AI now handles scheduling and even upsells maintenance plans. Revenue up 35% this year.",
    rating: 5,
    image: "LP",
  },
  {
    name: "Robert Greenfield",
    role: "Landscaping Company CEO",
    content:
      "Great for capturing leads when my crews are out in the field. The website they built showcases our work beautifully. Only minor hiccup was initial setup took longer than expected.",
    rating: 4,
    image: "RG",
  },
  {
    name: "Karen O'Brien",
    role: "HVAC Service Manager",
    content:
      "The AI receptionist handles emergency calls perfectly—routes urgent AC repairs immediately while booking routine maintenance. Our customers love the instant response.",
    rating: 5,
    image: "KO",
  },
  {
    name: "James Hartley",
    role: "Roofing Contractor",
    content:
      "Finally, a solution that understands the roofing business. It asks the right questions about damage type and schedules inspections automatically. Worth every penny.",
    rating: 5,
    image: "JH",
  },
  {
    name: "Maria Santos",
    role: "Landscape Design Director",
    content:
      "The new website increased our quote requests by 60%. The AI handles initial consultations and gathers project details before we even speak to the client.",
    rating: 4,
    image: "MS",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 tracking-tight">
            Trusted by <span className="gradient-text">30+ Businesses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say 
            about working with Oryx.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
              className="group"
            >
              <div className="bg-card border border-border/50 rounded-2xl p-7 h-full relative hover:border-primary/15 hover:shadow-md transition-all duration-400">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-7 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
                    <span className="text-primary-foreground font-semibold text-xs">
                      {testimonial.image}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm tracking-tight">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">
            Trusted by leading businesses across industries
          </p>
          <div className="flex flex-wrap justify-center gap-10 items-center opacity-40">
            {["Google Partner", "Meta Certified", "HubSpot", "Salesforce", "Stripe"].map(
              (brand) => (
                <div
                  key={brand}
                  className="text-muted-foreground font-display font-semibold text-base tracking-tight"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
