import { Phone, UserCheck, CalendarCheck, BarChart3 } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const AIReceptionists = () => (
  <ServicePageTemplate
    headline="Stop Losing Revenue to Missed Calls"
    subheadline="AI-powered call answering that captures every enquiry, qualifies every lead, and books appointments — 24/7, without adding headcount."
    problems={[
      "Calls going to voicemail during peak hours, evenings, and weekends",
      "Potential customers hanging up and calling your competitor instead",
      "Front desk overwhelmed — juggling walk-ins, admin, and ringing phones",
      "No visibility into how many calls you're actually missing",
      "Slow follow-up turning warm leads cold before your team responds",
    ]}
    howItWorksSteps={[
      { icon: Phone, title: "Call Captured", description: "Every inbound call is answered instantly — no hold music, no voicemail." },
      { icon: UserCheck, title: "Lead Qualified", description: "Caller intent is assessed and key details are captured automatically." },
      { icon: CalendarCheck, title: "Appointment Booked", description: "Qualified callers are booked into your calendar or routed to the right team." },
      { icon: BarChart3, title: "Pipeline Updated", description: "Every interaction is logged and tracked in your CRM dashboard." },
    ]}
    flowDiagram={{ steps: ["Call Received", "AI Answers", "Qualify", "Book / Route", "CRM Updated", "Follow-Up Sent"] }}
    deliverables={[
      "24/7 AI call answering configured for your business",
      "Custom greeting and qualification scripts",
      "Calendar integration for real-time booking",
      "Missed-call SMS recovery automation",
      "CRM pipeline with full call logging",
      "Real-time performance dashboard",
      "Weekly reporting on call volume and conversion",
    ]}
    typicalOutcomes={[
      "Reduction in missed-call leakage to near-zero",
      "15–25% increase in booked appointments from existing call volume",
      "Response time reduced from minutes to under 2 seconds",
      "Significant reduction in front desk admin workload",
      "Improved caller experience and satisfaction scores",
    ]}
    mockScreens={[
      { title: "Live Call Dashboard", lines: ["Active calls: 3", "Calls today: 47", "Booked appointments: 12", "Avg response: 1.4s", "Missed: 0"] },
      { title: "Call Transcript", lines: ["AI: Good morning, how can I help?", "Caller: I need an emergency plumber", "AI: I can book that for you today", "Status: Qualified → Booked", "Duration: 1m 42s"] },
      { title: "Pipeline View", lines: ["New Lead — Sarah M. — Emergency Repair", "Qualified — James T. — Boiler Service", "Booked — Mike R. — Annual Check", "Completed — Lisa K. — Drain Clearance"] },
      { title: "SMS Follow-Up", lines: ["Trigger: Missed call detected", "SMS sent within 30 seconds", "Link to online booking included", "Recovery rate: 38% of missed calls"] },
    ]}
    whoIsFor={[
      "Service businesses receiving 50+ inbound calls per week",
      "Operators doing £50k+ monthly revenue who can't afford missed opportunities",
      "Teams with no dedicated receptionist or overstretched front desk",
      "Multi-location businesses needing consistent call handling",
    ]}
    notAFit={[
      "Businesses with fewer than 20 calls per week",
      "Companies not yet generating consistent inbound demand",
      "Teams looking for outbound cold-calling solutions",
      "Businesses that don't track revenue or appointments",
    ]}
    onboarding={[
      "Access to your current phone system or forwarding number",
      "Your business hours, service areas, and pricing structure",
      "Calendar access for real-time appointment booking",
      "CRM login or willingness to adopt the included pipeline",
      "30-minute onboarding call with your team",
    ]}
    faqs={[
      { question: "Does the AI sound robotic?", answer: "No. The voice AI is trained to sound natural and conversational. Most callers don't realise they're speaking with an AI system. We customise the tone and language to match your brand." },
      { question: "Can it handle complex enquiries?", answer: "The AI handles the majority of standard inbound calls — booking, qualification, information requests. For complex or sensitive calls, it seamlessly transfers to your team with full context." },
      { question: "What happens outside business hours?", answer: "The AI answers 24/7. After-hours calls are captured, qualified, and either booked for the next available slot or flagged as urgent for immediate attention." },
      { question: "How quickly can this be set up?", answer: "Most deployments are live within 3–5 business days. We handle configuration, testing, and optimisation during that period." },
      { question: "Will it integrate with my existing systems?", answer: "Yes. We integrate with most calendar, CRM, and phone systems. If you're using a custom setup, we'll assess compatibility during the strategy call." },
    ]}
    trustGuarantee={{
      title: "Rigorously Stress-Tested",
      description: "Our AI agents are rigorously stress-tested across hundreds of unique call scenarios and industry-specific types to ensure maximum performance, accuracy, and conversion success."
    }}
  />
);

export default AIReceptionists;
