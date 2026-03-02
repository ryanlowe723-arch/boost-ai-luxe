import { Monitor, Smartphone, Gauge, Search } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const RevenueWebsites = () => (
  <ServicePageTemplate
    headline="Websites That Convert Visitors Into Booked Jobs"
    subheadline="High-performance websites built to capture inbound demand, not just look good. Every page is a revenue asset designed to drive bookings."
    problems={[
      "Your website looks fine but doesn't generate leads or bookings",
      "Visitors leave without taking action — no calls, no forms, no bookings",
      "Mobile experience is slow or broken, losing half your traffic",
      "No integration with your CRM, calendar, or follow-up systems",
      "You're paying for traffic but your site isn't converting it",
    ]}
    howItWorksSteps={[
      { icon: Monitor, title: "Strategy & Structure", description: "We map your buyer journey and design pages to convert at each stage." },
      { icon: Search, title: "SEO & Content", description: "Pages built with search intent, local keywords, and conversion copy." },
      { icon: Smartphone, title: "Build & Optimise", description: "Mobile-first development with fast load times and clear CTAs." },
      { icon: Gauge, title: "Launch & Track", description: "Go live with analytics, heatmaps, and conversion tracking in place." },
    ]}
    flowDiagram={{ steps: ["Visitor Lands", "Engaged by Copy", "CTA Clicked", "Form / Call", "Lead Captured", "Follow-Up Triggered"] }}
    deliverables={[
      "Conversion-optimised website (5–10 pages typical)",
      "Mobile-first responsive design",
      "SEO foundation with local keyword targeting",
      "Integrated contact forms and click-to-call",
      "Calendar booking widget embedded on key pages",
      "Speed optimisation (sub-2-second load times)",
      "Analytics and conversion tracking setup",
      "CRM integration for automatic lead capture",
    ]}
    typicalOutcomes={[
      "Higher conversion rate from visitor to enquiry",
      "Improved organic search rankings for local terms",
      "Faster page load times improving user experience",
      "More inbound calls and form submissions from existing traffic",
      "Reduced cost per lead from paid traffic campaigns",
    ]}
    mockScreens={[
      { title: "Conversion Analytics", lines: ["Visitors this month: 2,340", "Form submissions: 87", "Click-to-call: 134", "Conversion rate: 9.4%", "Avg time on site: 2m 48s"] },
      { title: "Page Performance", lines: ["Homepage: 1.2s load time", "Services page: 1.1s load time", "Contact page: 0.9s load time", "Mobile score: 94/100", "Desktop score: 98/100"] },
      { title: "Lead Capture", lines: ["New lead: Emergency Repair", "Source: Google Organic", "Page: /services/emergency", "Action: Form submitted", "Auto-assigned to pipeline"] },
      { title: "SEO Dashboard", lines: ["Keywords ranking: 34", "Top 3 positions: 8", "Organic traffic: +42% MoM", "Local pack appearances: 12", "Backlinks: 47"] },
    ]}
    whoIsFor={[
      "Service businesses whose current site isn't generating leads",
      "Operators spending on ads but getting poor website conversion",
      "Companies ready to invest in a website as a revenue tool",
      "Businesses wanting to rank higher in local search results",
    ]}
    notAFit={[
      "Businesses looking for the cheapest possible website",
      "Companies that just want a digital brochure with no conversion focus",
      "Teams not ready to invest in ongoing content or SEO",
      "Businesses without a clear service offering or pricing",
    ]}
    onboarding={[
      "Overview of your services, pricing, and target customer",
      "Brand guidelines, logos, and any existing photography",
      "Access to your domain registrar and hosting (if existing)",
      "Competitor websites for reference and differentiation",
      "CRM and calendar details for integration",
    ]}
    faqs={[
      { question: "How long does a website build take?", answer: "Typical builds take 2–4 weeks from kickoff to launch, depending on complexity and content readiness." },
      { question: "Do I own the website?", answer: "Yes, completely. You own the domain, content, and codebase. We build on platforms that give you full control." },
      { question: "Will it work on mobile?", answer: "Absolutely. Every site is built mobile-first. Over 60% of service business traffic comes from mobile devices, so this is non-negotiable." },
      { question: "Do you write the content?", answer: "Yes. We write conversion-focused copy based on your services, audience, and competitive landscape. You review and approve before launch." },
      { question: "What about ongoing maintenance?", answer: "We offer optional maintenance plans for updates, security patches, and content changes. Your site will also be built for easy self-management." },
    ]}
  />
);

export default RevenueWebsites;
