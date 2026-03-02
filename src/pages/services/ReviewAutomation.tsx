import { Star, MessageSquare, TrendingUp, Shield } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const ReviewAutomation = () => (
  <ServicePageTemplate
    headline="Build a 5-Star Reputation on Autopilot"
    subheadline="Automated review collection that turns every satisfied customer into a public advocate — boosting trust, visibility, and inbound demand."
    problems={[
      "Happy customers rarely leave reviews without being asked",
      "Negative reviews appear publicly before you can address them",
      "Manually requesting reviews is inconsistent and time-consuming",
      "Low review count making you look less credible than competitors",
      "No system to monitor or respond to reviews across platforms",
    ]}
    howItWorksSteps={[
      { icon: Star, title: "Job Completed", description: "Your system triggers an automated review request after service delivery." },
      { icon: MessageSquare, title: "Satisfaction Check", description: "A quick check filters happy customers from those who need attention." },
      { icon: TrendingUp, title: "Review Published", description: "Satisfied customers are directed to leave reviews on Google and other platforms." },
      { icon: Shield, title: "Issues Caught", description: "Unhappy responses are flagged privately so your team can resolve them." },
    ]}
    flowDiagram={{ steps: ["Service Complete", "SMS/Email Sent", "Satisfaction Check", "Happy → Review Link", "Unhappy → Private Alert"] }}
    deliverables={[
      "Automated review request sequences (SMS + email)",
      "Satisfaction pre-filter to protect your public rating",
      "Direct links to Google, Facebook, and industry platforms",
      "Negative feedback private escalation system",
      "Review monitoring dashboard across all platforms",
      "Monthly review performance reports",
      "Response templates for common review scenarios",
    ]}
    typicalOutcomes={[
      "3–5x increase in review volume within 60 days",
      "Improved average star rating across platforms",
      "Negative reviews intercepted before they go public",
      "Higher local search visibility driven by review signals",
      "Increased customer trust and conversion from search results",
    ]}
    mockScreens={[
      { title: "Review Dashboard", lines: ["New reviews this month: 34", "Average rating: 4.8 ★", "Google: 28 reviews", "Facebook: 6 reviews", "Response rate: 100%"] },
      { title: "Review Request Flow", lines: ["Trigger: Job marked complete", "SMS sent: 2 hours after", "Reminder: Day 2 if no action", "Conversion rate: 42%", "Avg time to review: 18 hours"] },
      { title: "Sentiment Filter", lines: ["Positive responses: 89%", "Neutral responses: 7%", "Negative responses: 4%", "Private escalations: 3", "Resolved this month: 3/3"] },
      { title: "Platform Overview", lines: ["Google Business: 4.8 ★ (142 reviews)", "Facebook: 4.7 ★ (38 reviews)", "Trustpilot: 4.9 ★ (24 reviews)", "Industry site: 4.6 ★ (12 reviews)"] },
    ]}
    whoIsFor={[
      "Service businesses that rely on trust and reputation to win work",
      "Operators with consistent job completions (20+ per month)",
      "Businesses wanting to outrank competitors in local search",
      "Teams with no current system for review collection",
    ]}
    notAFit={[
      "Businesses completing fewer than 10 jobs per month",
      "Companies not yet delivering consistent service quality",
      "Teams unwilling to address negative customer feedback",
      "Businesses operating in industries where reviews aren't relevant",
    ]}
    onboarding={[
      "Access to your job management or CRM system for triggers",
      "Customer contact details (phone/email) after job completion",
      "Links to your Google Business and other review profiles",
      "Preferred messaging tone and brand voice guidelines",
      "Internal escalation contacts for negative feedback",
    ]}
    faqs={[
      { question: "Is this fake review generation?", answer: "Absolutely not. We automate the process of asking real customers for genuine reviews. Every review is from a verified customer interaction." },
      { question: "What platforms do you support?", answer: "Google, Facebook, Trustpilot, Yelp, and most industry-specific platforms. We configure the review links based on which platforms matter most for your business." },
      { question: "Can customers leave negative reviews?", answer: "Our system includes a satisfaction pre-check. Unhappy customers are routed to a private feedback form so you can resolve issues before they become public." },
      { question: "How quickly will I see more reviews?", answer: "Most businesses see a noticeable increase within the first 2–3 weeks. Within 60 days, review volume typically increases by 3–5x." },
      { question: "Do I need to respond to every review?", answer: "We recommend it, and we provide response templates to make it easy. Responding to reviews signals to search engines and customers that you're engaged." },
    ]}
  />
);

export default ReviewAutomation;
