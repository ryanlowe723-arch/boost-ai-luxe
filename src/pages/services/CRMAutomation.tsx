import { Workflow, Bell, BarChart3, Repeat } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const CRMAutomation = () => (
  <ServicePageTemplate
    headline="Turn Your Pipeline Into a Revenue Machine"
    subheadline="Automated lead tracking, follow-up sequences, and pipeline management that moves every enquiry toward a booked job — without manual effort."
    problems={[
      "Leads falling through the cracks because nobody followed up in time",
      "No visibility into where prospects are in your pipeline",
      "Hours wasted on manual admin — data entry, reminders, status updates",
      "Inconsistent follow-up depending on who's working that day",
      "No clear attribution of which channels are driving revenue",
    ]}
    howItWorksSteps={[
      { icon: Workflow, title: "Lead Captured", description: "Every enquiry — call, form, chat — enters your pipeline automatically." },
      { icon: Bell, title: "Automated Nurture", description: "Follow-up sequences trigger based on lead status and behaviour." },
      { icon: Repeat, title: "Pipeline Managed", description: "Leads move through stages automatically with smart rules and alerts." },
      { icon: BarChart3, title: "Revenue Tracked", description: "See exactly which leads converted and what drove the revenue." },
    ]}
    flowDiagram={{ steps: ["Lead Captured", "Pipeline Stage", "Automated Nurture", "Task Assigned", "Job Booked", "Revenue Attributed"] }}
    deliverables={[
      "Full CRM pipeline configured for your sales process",
      "Automated follow-up sequences (SMS, email, voicemail drops)",
      "Lead scoring and prioritisation logic",
      "Task assignment and team notifications",
      "Revenue attribution dashboard",
      "Weekly pipeline health reports",
      "Custom stage definitions matching your workflow",
    ]}
    typicalOutcomes={[
      "Significant reduction in lead response time",
      "More consistent follow-up across all team members",
      "Improved conversion rate from enquiry to booked job",
      "Reduction in admin workload by 25–40%",
      "Clearer visibility into pipeline health and forecasting",
    ]}
    mockScreens={[
      { title: "Pipeline Dashboard", lines: ["New Leads: 23", "In Progress: 15", "Quote Sent: 8", "Booked: 12", "Won This Month: £34,200"] },
      { title: "Automated Sequence", lines: ["Day 0: Instant SMS confirmation", "Day 1: Follow-up email with details", "Day 3: Check-in SMS if no response", "Day 7: Final follow-up + offer", "Auto-close if no engagement"] },
      { title: "Team Activity", lines: ["Jake: 12 leads assigned, 8 contacted", "Sarah: 9 leads assigned, 9 contacted", "Mike: 6 leads assigned, 4 contacted", "Avg response time: 4 minutes"] },
      { title: "Revenue Attribution", lines: ["Google Ads: £12,400 (38%)", "Organic: £8,200 (25%)", "Referral: £7,100 (22%)", "Direct: £4,900 (15%)"] },
    ]}
    whoIsFor={[
      "Service businesses with 50+ leads per month",
      "Teams spending 5+ hours per week on manual follow-up",
      "Operators who want pipeline visibility without spreadsheets",
      "Multi-person teams needing consistent sales processes",
    ]}
    notAFit={[
      "Businesses with fewer than 20 enquiries per month",
      "Solo operators who prefer manual tracking",
      "Companies not ready to commit to a structured sales process",
      "Teams without clear service pricing or booking workflows",
    ]}
    onboarding={[
      "Overview of your current sales process and stages",
      "Team member list for task assignment setup",
      "Existing lead sources (forms, phone, chat, email)",
      "Preferred follow-up messaging and brand voice",
      "Access to your current CRM (if migrating) or willingness to adopt ours",
    ]}
    faqs={[
      { question: "Do I need to change my existing CRM?", answer: "Not necessarily. If your current system supports automation, we can work within it. If not, we provide a fully configured CRM as part of the deployment." },
      { question: "How long until we see results?", answer: "Most teams see measurable improvement in follow-up speed and lead conversion within the first 2–3 weeks of deployment." },
      { question: "Can I customise the follow-up sequences?", answer: "Absolutely. Every message, timing, and trigger is customised to match your brand voice and sales process." },
      { question: "What if a lead needs a personal touch?", answer: "The system flags leads that need human attention and assigns tasks to specific team members. Automation handles the routine; your team handles the complex." },
      { question: "Is my data secure?", answer: "Yes. All data is encrypted at rest and in transit. We follow industry-standard security practices and never share your data with third parties." },
    ]}
  />
);

export default CRMAutomation;
