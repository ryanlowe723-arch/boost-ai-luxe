import { Mail, Clock, UserCheck, BarChart3 } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import StickyBottomCTA from "@/components/StickyBottomCTA";

const AutomatedFollowUp = () => (
  <>
    <ServicePageTemplate
      headline="Automated Follow-Up"
      subheadline="Stop losing leads to slow response times. Our AI-powered sequences follow up via SMS and email within seconds — and keep nurturing until the lead converts."
      problems={[
        "80% of leads require 5+ follow-ups to convert — most businesses stop after one.",
        "Manual follow-up is inconsistent. Your team forgets, delays, or sends generic messages.",
        "Leads go cold within minutes. If you don't respond in under 60 seconds, your competitor will.",
        "No system to track which follow-ups are working and which are wasting time.",
      ]}
      howItWorksSteps={[
        { icon: Mail, title: "Lead Captured", description: "New lead enters from any source — call, form, chat, or ad." },
        { icon: Clock, title: "Instant Response", description: "AI sends a personalised SMS and email within 30 seconds." },
        { icon: UserCheck, title: "Nurture Sequence", description: "Multi-touch follow-up over days/weeks until they book or opt out." },
        { icon: BarChart3, title: "Track & Optimise", description: "See open rates, reply rates, and conversion data in real time." },
      ]}
      flowDiagram={{ steps: ["Lead In", "Instant SMS", "Email Sequence", "Reminder", "Booking Confirmed"] }}
      deliverables={[
        "Custom SMS & email follow-up sequences tailored to your services",
        "Instant response automation (under 30 seconds)",
        "Multi-channel nurture campaigns (SMS + email)",
        "Personalised messaging based on lead source and service interest",
        "Real-time analytics dashboard with conversion tracking",
        "A/B tested message templates optimised for your industry",
      ]}
      typicalOutcomes={[
        "35–50% increase in lead-to-booking conversion rate",
        "Response time reduced from hours/days to under 30 seconds",
        "3–5x more follow-up touchpoints without adding staff",
        "£2K–£8K/month in recovered revenue from leads that would have gone cold",
      ]}
      mockScreens={[
        { title: "Follow-Up Dashboard", lines: ["New lead: Sarah M. — Boiler Repair", "SMS sent: 12 seconds ago", "Email 1: Opened ✓", "Reminder scheduled: Tomorrow 9am"] },
        { title: "Sequence Builder", lines: ["Step 1: Instant SMS — 'Thanks for your enquiry'", "Step 2: Email — Service details + booking link", "Step 3: Day 2 SMS — 'Still need help?'", "Step 4: Day 5 — Final follow-up"] },
      ]}
      whoIsFor={[
        "Service businesses receiving 20+ leads/month",
        "Teams that struggle with consistent follow-up",
        "Businesses losing leads to faster-responding competitors",
        "Companies wanting to scale without hiring more admin staff",
      ]}
      notAFit={[
        "You prefer to manually chase every lead yourself",
        "You have fewer than 10 enquiries per month",
        "You don't want to communicate via SMS or email",
      ]}
      onboarding={[
        "Access to your current lead sources (forms, ads, CRM)",
        "Your preferred messaging tone and brand voice",
        "Service list and pricing structure for personalised templates",
        "Booking calendar or scheduling tool integration details",
      ]}
      faqs={[
        { question: "Will the messages sound robotic?", answer: "No. Every sequence is custom-written in your brand voice. Leads won't know it's automated." },
        { question: "Can I approve messages before they go out?", answer: "Yes. You approve all templates during setup. After that, they fire automatically." },
        { question: "What if a lead replies?", answer: "Replies are routed to your team instantly via SMS notification so you can jump in for the close." },
        { question: "How quickly can this be set up?", answer: "Most follow-up systems are live within 5–7 days of onboarding." },
      ]}
    />
    <StickyBottomCTA />
  </>
);

export default AutomatedFollowUp;
