import { Send, MessageSquare, UserCheck, TrendingUp } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import StickyBottomCTA from "@/components/StickyBottomCTA";

const SocialMediaDM = () => (
  <>
    <ServicePageTemplate
      headline="Social Media DM Automation"
      subheadline="Turn Instagram and Facebook messages into booked jobs — automatically. Our AI responds to every DM, qualifies leads, and pushes them into your booking pipeline 24/7."
      problems={[
        "You're getting DMs on Instagram and Facebook but taking hours (or days) to reply.",
        "Potential customers message you at midnight — by morning they've booked your competitor.",
        "Your team can't monitor social inboxes around the clock.",
        "You have no system to qualify social leads or track which DMs convert to revenue.",
      ]}
      howItWorksSteps={[
        { icon: Send, title: "DM Received", description: "A prospect sends a message on Instagram or Facebook." },
        { icon: MessageSquare, title: "AI Responds", description: "Instant, personalised reply qualifies the lead and answers FAQs." },
        { icon: UserCheck, title: "Lead Qualified", description: "AI captures details and routes hot leads to your booking system." },
        { icon: TrendingUp, title: "Job Booked", description: "Lead is converted and tracked with full revenue attribution." },
      ]}
      flowDiagram={{ steps: ["DM Received", "AI Response", "Qualification", "Details Captured", "Booking Link Sent", "Job Confirmed"] }}
      deliverables={[
        "AI-powered auto-responder for Instagram & Facebook DMs",
        "Custom conversation flows tailored to your services",
        "Lead qualification logic (budget, location, urgency)",
        "Seamless handoff to your team for hot leads",
        "Integration with your booking/calendar system",
        "Analytics dashboard tracking DM-to-booking conversion",
      ]}
      typicalOutcomes={[
        "90%+ DM response rate (vs. industry average of ~30%)",
        "Response time reduced from hours to under 60 seconds",
        "20–40% of social DMs converted into qualified leads",
        "£1K–£5K/month in new revenue from social channels alone",
      ]}
      mockScreens={[
        { title: "DM Automation Dashboard", lines: ["DMs received today: 23", "Auto-responded: 23 (100%)", "Qualified leads: 8 (34.8%)", "Bookings from DMs: 3"] },
        { title: "Conversation Flow", lines: ["User: 'Hi, do you do garden clearances?'", "AI: 'Yes! What area are you based in?'", "User: 'Birmingham'", "AI: 'Great — here's a link to book a free quote ✓'"] },
      ]}
      whoIsFor={[
        "Service businesses getting 10+ DMs/week on social media",
        "Companies with strong social media presence but poor DM follow-up",
        "Businesses wanting to monetise their Instagram/Facebook audience",
        "Teams that can't monitor social inboxes outside business hours",
      ]}
      notAFit={[
        "You don't have active Instagram or Facebook business accounts",
        "You receive fewer than 5 DMs per week",
        "You prefer not to automate any customer communication",
      ]}
      onboarding={[
        "Admin access to your Instagram and Facebook business accounts",
        "List of services, pricing, and FAQs for AI training",
        "Your preferred booking system or calendar link",
        "Brand voice and tone guidelines",
      ]}
      faqs={[
        { question: "Will people know it's a bot?", answer: "The AI is trained on your brand voice and services. Conversations feel natural and personal — most leads don't realise it's automated." },
        { question: "What happens if the AI can't answer a question?", answer: "It gracefully hands off to your team with full context, so the customer never feels abandoned." },
        { question: "Does this work with Instagram Stories replies?", answer: "Yes. Any DM that comes into your Instagram inbox — including Story replies — triggers the automation." },
        { question: "Can I customise the responses?", answer: "Absolutely. Every conversation flow is custom-built around your services, tone, and qualification criteria." },
      ]}
    />
    <StickyBottomCTA />
  </>
);

export default SocialMediaDM;
