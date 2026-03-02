import { MessageSquare, Clock, Globe, UserCheck } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const AIChatSystems = () => (
  <ServicePageTemplate
    headline="Convert Website Visitors While They're Still Browsing"
    subheadline="AI chat systems that engage, qualify, and route website visitors into your pipeline — automatically, around the clock."
    problems={[
      "Website visitors leaving without making contact",
      "Live chat requires staff availability — which you don't have 24/7",
      "Contact forms feel impersonal and have low completion rates",
      "No way to qualify visitor intent before they reach your team",
      "Potential customers browsing at night or weekends with no way to engage",
    ]}
    howItWorksSteps={[
      { icon: MessageSquare, title: "Visitor Engages", description: "Chat widget appears at the right moment to capture visitor attention." },
      { icon: Clock, title: "Instant Response", description: "AI responds in seconds, answering questions and gathering requirements." },
      { icon: UserCheck, title: "Lead Qualified", description: "Visitor intent and details are captured and scored automatically." },
      { icon: Globe, title: "Routed & Booked", description: "Qualified leads are routed to your team or booked directly into your calendar." },
    ]}
    flowDiagram={{ steps: ["Visitor Arrives", "Chat Triggered", "AI Engages", "Qualify Intent", "Capture Details", "Book / Route"] }}
    deliverables={[
      "AI chat widget configured for your website",
      "Custom conversation flows matching your services",
      "Lead qualification logic and scoring",
      "Calendar integration for direct booking",
      "CRM integration for automatic lead capture",
      "Multi-language support (if needed)",
      "Chat transcript logging and analytics",
      "Handoff protocol for complex enquiries",
    ]}
    typicalOutcomes={[
      "Increased website-to-lead conversion rate",
      "Capture of after-hours enquiries that would otherwise be lost",
      "Faster qualification — visitors pre-screened before reaching your team",
      "Reduced load on phone lines and email inboxes",
      "Better understanding of what visitors are looking for",
    ]}
    mockScreens={[
      { title: "Chat Dashboard", lines: ["Active conversations: 2", "Chats today: 18", "Leads captured: 7", "Avg response: 1.2s", "Satisfaction: 94%"] },
      { title: "Conversation Preview", lines: ["Visitor: Do you service the SE London area?", "AI: Yes, we cover all SE London postcodes.", "Visitor: Great, I need a boiler inspection", "AI: I can book that for you — what day works?", "Status: Qualified → Booking"] },
      { title: "Lead Intelligence", lines: ["Source: Google Ads", "Pages visited: 3", "Time on site: 4m 12s", "Intent: High (boiler repair)", "Action: Appointment booked"] },
      { title: "Performance Report", lines: ["Chat engagement rate: 12%", "Lead capture rate: 38%", "Booking rate: 22%", "Avg chat duration: 2m 30s", "After-hours captures: 34%"] },
    ]}
    whoIsFor={[
      "Service businesses with consistent website traffic (500+ visits/month)",
      "Operators who want to capture leads outside business hours",
      "Teams that can't staff live chat but need real-time engagement",
      "Businesses running paid ads and wanting better conversion rates",
    ]}
    notAFit={[
      "Websites with fewer than 200 monthly visitors",
      "Businesses that don't have a clear service offering to discuss",
      "Companies without a booking or sales process to route leads into",
      "Teams that prefer no automated communication with visitors",
    ]}
    onboarding={[
      "Access to your website for widget installation",
      "Overview of your services and common customer questions",
      "Booking calendar or CRM details for lead routing",
      "Brand voice and tone guidelines",
      "Escalation rules for complex or urgent enquiries",
    ]}
    faqs={[
      { question: "Will the chat annoy my visitors?", answer: "No. The widget is designed to appear contextually — not as an intrusive popup. Visitors can dismiss it easily, and it only triggers when engagement is likely." },
      { question: "Can it handle technical questions?", answer: "The AI is trained on your services and common enquiries. For highly technical or unusual questions, it hands off to your team with full context." },
      { question: "Does it work on mobile?", answer: "Yes. The chat widget is fully responsive and optimised for mobile browsers, where a significant portion of your traffic likely comes from." },
      { question: "How is this different from a basic chatbot?", answer: "Unlike rule-based chatbots, our AI understands natural language, qualifies intent, and adapts its responses. It's designed to convert, not just answer FAQs." },
      { question: "Can I see chat transcripts?", answer: "Yes. Every conversation is logged and accessible in your dashboard. You can review transcripts, see lead details, and track conversion metrics." },
    ]}
  />
);

export default AIChatSystems;
