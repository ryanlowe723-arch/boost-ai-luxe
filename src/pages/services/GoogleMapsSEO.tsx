import { MapPin, Search, Globe, TrendingUp } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import StickyBottomCTA from "@/components/StickyBottomCTA";

const GoogleMapsSEO = () => (
  <>
    <ServicePageTemplate
      headline="Google Maps & SEO"
      subheadline="Dominate local search. We optimise your Google Business Profile, build strategic service pages, and structure your site so you rank higher on Maps and organic search — driving free, high-intent leads every month."
      problems={[
        "Your competitors show up on Google Maps before you — even if your service is better.",
        "Your Google Business Profile is incomplete, outdated, or unoptimised.",
        "You have no dedicated service pages, so Google doesn't know what you offer or where.",
        "You're paying for ads when you could be getting free leads from organic search.",
      ]}
      howItWorksSteps={[
        { icon: MapPin, title: "GBP Optimisation", description: "We fully optimise your Google Business Profile for maximum local visibility." },
        { icon: Search, title: "Local SEO Audit", description: "We audit your site structure, citations, and keyword gaps." },
        { icon: Globe, title: "Service Pages", description: "We build location + service targeted pages that rank for buyer-intent searches." },
        { icon: TrendingUp, title: "Rank & Track", description: "Monitor your Maps ranking, organic traffic, and lead attribution." },
      ]}
      flowDiagram={{ steps: ["GBP Audit", "Keyword Research", "On-Page SEO", "Service Pages Built", "Citations & Links", "Rankings Climb"] }}
      deliverables={[
        "Complete Google Business Profile optimisation",
        "Local keyword research and competitor analysis",
        "Strategic service + location landing pages",
        "On-page SEO (meta tags, schema markup, internal linking)",
        "Citation building across 40+ directories",
        "Monthly ranking reports and traffic analytics",
      ]}
      typicalOutcomes={[
        "Top 3 Google Maps ranking for primary service keywords within 90 days",
        "40–120% increase in organic website traffic within 6 months",
        "15–30 additional inbound leads/month from organic search alone",
        "Reduced ad spend as organic leads replace paid traffic",
      ]}
      mockScreens={[
        { title: "Rankings Dashboard", lines: ["'Plumber near me' — Position #2 (↑5)", "'Emergency plumber [city]' — Position #1", "'Boiler repair [city]' — Position #3 (↑8)", "Maps Pack visibility: 89%"] },
        { title: "GBP Performance", lines: ["Profile views: 4,200/month (↑62%)", "Direction requests: 340/month", "Phone calls from GBP: 127/month", "Photo views: 8,900/month"] },
      ]}
      whoIsFor={[
        "Service businesses that rely on local customers",
        "Companies not appearing in Google Maps for their core services",
        "Businesses spending heavily on ads with poor organic presence",
        "Multi-location businesses wanting to rank in each service area",
      ]}
      notAFit={[
        "You serve a purely online/national audience with no local component",
        "You're not willing to wait 60–90 days for organic results to build",
        "You have no website or aren't willing to build one",
      ]}
      onboarding={[
        "Google Business Profile login credentials",
        "Full list of services offered and areas served",
        "Access to your website CMS or hosting",
        "Any existing keyword research or competitor insights",
      ]}
      faqs={[
        { question: "How long until I see results?", answer: "GBP optimisations can show impact in 2–4 weeks. Full SEO results typically build over 60–90 days as pages index and authority grows." },
        { question: "Do I need a website?", answer: "Yes. A website with proper service pages is essential for ranking. If you don't have one, we can build a Revenue Website alongside your SEO work." },
        { question: "Is this a one-time thing or ongoing?", answer: "GBP optimisation is a one-time setup with ongoing maintenance. SEO is most effective as an ongoing service with monthly content and link building." },
        { question: "Will this replace my need for ads?", answer: "Over time, strong organic rankings can significantly reduce your ad spend. Many clients cut ad budgets by 30–60% within 6 months." },
      ]}
    />
    <StickyBottomCTA />
  </>
);

export default GoogleMapsSEO;
