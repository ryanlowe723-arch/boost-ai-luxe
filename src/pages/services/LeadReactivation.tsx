import { RefreshCw, Mail, UserCheck, TrendingUp } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import StickyBottomCTA from "@/components/StickyBottomCTA";

const LeadReactivation = () => (
  <>
    <ServicePageTemplate
      headline="Lead Reactivation"
      subheadline="Your database is full of past enquiries and old customers who never came back. We build automated campaigns that revive them — turning forgotten leads into booked jobs."
      problems={[
        "You've spent thousands on ads to generate leads — but most never converted and were never contacted again.",
        "Past customers who loved your work haven't been reminded you exist.",
        "Your CRM is full of 'dead' leads that no one has time to follow up with.",
        "Competitors are winning the business you already earned the attention of.",
      ]}
      howItWorksSteps={[
        { icon: RefreshCw, title: "Database Audit", description: "We analyse your existing contacts and segment by potential." },
        { icon: Mail, title: "Reactivation Campaign", description: "AI sends personalised win-back sequences via SMS and email." },
        { icon: UserCheck, title: "Re-engagement", description: "Warm leads are identified and routed to your team to close." },
        { icon: TrendingUp, title: "Revenue Recovered", description: "Track every reactivated lead and the revenue it generates." },
      ]}
      flowDiagram={{ steps: ["Database Import", "Segment & Score", "Win-Back Sequence", "Lead Re-engaged", "Job Booked"] }}
      deliverables={[
        "Full database audit and lead scoring",
        "Custom win-back SMS & email campaigns",
        "Past customer re-engagement sequences",
        "Automated segmentation by lead quality and recency",
        "Revenue attribution for every reactivated lead",
        "Monthly reactivation reports with ROI tracking",
      ]}
      typicalOutcomes={[
        "10–25% of dormant leads re-engage within the first campaign",
        "£3K–£12K in recovered revenue from a single reactivation cycle",
        "Past customers rebook at 2–3x the rate of cold leads",
        "ROI of 5–15x on reactivation campaigns vs. new lead acquisition",
      ]}
      mockScreens={[
        { title: "Reactivation Dashboard", lines: ["Total contacts imported: 1,247", "Qualified for reactivation: 834", "Campaigns sent: 3 sequences", "Re-engaged leads: 127 (15.2%)"] },
        { title: "Win-Back Sequence", lines: ["SMS 1: 'Hi [Name], still need [service]?'", "Email: Special offer + booking link", "SMS 2: 'Quick reminder — slots filling up'", "Final: 'Last chance — priority booking'"] },
      ]}
      whoIsFor={[
        "Businesses with 200+ past leads or customers in their database",
        "Companies that have invested in ads but never followed up properly",
        "Service businesses with repeat/seasonal work (HVAC, cleaning, landscaping)",
        "Anyone sitting on a goldmine of contacts they've never re-engaged",
      ]}
      notAFit={[
        "You have no existing database or CRM",
        "You've been in business less than 6 months with minimal contacts",
        "You don't offer services that benefit from repeat business",
      ]}
      onboarding={[
        "Export of your existing CRM, spreadsheet, or contact list",
        "Details on services offered and any current promotions",
        "Brand voice guidelines for messaging",
        "Booking system or calendar integration details",
      ]}
      faqs={[
        { question: "Won't people be annoyed if I contact old leads?", answer: "Our campaigns are respectful, value-driven, and include easy opt-outs. Most people appreciate being reminded — especially if they genuinely needed the service." },
        { question: "How old can the leads be?", answer: "We've successfully reactivated leads that are 12–18 months old. The key is relevance and personalisation." },
        { question: "Do I need a CRM?", answer: "No. We can work with spreadsheets, phone lists, or any data export. We'll help you organise it." },
        { question: "How quickly do results come in?", answer: "Most clients see re-engaged leads within the first 48–72 hours of a campaign launch." },
      ]}
    />
    <StickyBottomCTA />
  </>
);

export default LeadReactivation;
