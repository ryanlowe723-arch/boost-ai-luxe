import { motion } from "framer-motion";
import { Phone, LayoutDashboard, CalendarCheck } from "lucide-react";

const mockups = [
  {
    icon: Phone,
    title: "AI Call Transcript",
    content: (
      <div className="space-y-3 text-xs font-mono">
        <div className="flex gap-2">
          <span className="text-primary font-semibold shrink-0">AI:</span>
          <span className="text-muted-foreground">
            "Good morning, thank you for calling Johnson HVAC. How can I direct your call today?"
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-foreground/70 font-semibold shrink-0">Caller:</span>
          <span className="text-muted-foreground">
            "Hi, my AC unit stopped working. I need someone out today if possible."
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-primary font-semibold shrink-0">AI:</span>
          <span className="text-muted-foreground">
            "I can schedule a technician for you this afternoon. Can I take your address and a contact number?"
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-foreground/70 font-semibold shrink-0">Caller:</span>
          <span className="text-muted-foreground">"Sure, it's 14 Oak Lane, Birmingham…"</span>
        </div>
        <div className="pt-2 border-t border-border/30 text-muted-foreground/60 text-[10px]">
          Call duration: 1m 42s · Lead captured · Appointment booked
        </div>
      </div>
    ),
  },
  {
    icon: LayoutDashboard,
    title: "CRM Pipeline View",
    content: (
      <div className="space-y-2">
        {[
          { stage: "New Lead", count: 12, color: "bg-primary/20 text-primary" },
          { stage: "Contacted", count: 8, color: "bg-primary/30 text-primary" },
          { stage: "Appointment Set", count: 6, color: "bg-primary/40 text-primary" },
          { stage: "Proposal Sent", count: 4, color: "bg-primary/50 text-primary-foreground" },
          { stage: "Won", count: 3, color: "bg-primary text-primary-foreground" },
        ].map((stage) => (
          <div key={stage.stage} className="flex items-center gap-3">
            <span className="text-[10px] sm:text-xs text-muted-foreground w-24 sm:w-28 shrink-0">{stage.stage}</span>
            <div className="flex-1 h-5 sm:h-6 bg-muted/50 rounded overflow-hidden">
              <div
                className={`h-full ${stage.color} rounded flex items-center px-2`}
                style={{ width: `${(stage.count / 12) * 100}%` }}
              >
                <span className="text-[9px] sm:text-[10px] font-semibold">{stage.count}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-border/30 text-[10px] text-muted-foreground/60">
          Pipeline value: £38,400 · This month
        </div>
      </div>
    ),
  },
  {
    icon: CalendarCheck,
    title: "Booking Confirmation",
    content: (
      <div className="space-y-3">
        <div className="bg-muted/30 rounded-lg p-3 border border-border/30">
          <div className="text-xs font-semibold text-foreground mb-1">Appointment Confirmed</div>
          <div className="space-y-1 text-[10px] sm:text-[11px] text-muted-foreground">
            <div className="flex justify-between">
              <span>Client:</span>
              <span className="text-foreground/80">Sarah Mitchell</span>
            </div>
            <div className="flex justify-between">
              <span>Service:</span>
              <span className="text-foreground/80">AC Repair — Emergency</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              <span className="text-foreground/80">Today, 2:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Technician:</span>
              <span className="text-foreground/80">James H.</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          SMS confirmation sent · Calendar synced · CRM updated
        </div>
      </div>
    ),
  },
];

const InsideTheSystem = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Visual Proof
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold tracking-tight text-foreground">
            Inside The System
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {mockups.map((mockup, index) => (
            <motion.div
              key={mockup.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <mockup.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-xs sm:text-sm font-display font-semibold text-foreground tracking-tight">
                  {mockup.title}
                </h3>
              </div>
              {mockup.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideTheSystem;