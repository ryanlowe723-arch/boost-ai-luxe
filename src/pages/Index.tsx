import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegratedWith from "@/components/IntegratedWith";
import WhatWeDeploy from "@/components/WhatWeDeploy";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import DeploymentTimeline from "@/components/DeploymentTimeline";
import Pricing from "@/components/Pricing";
import InsideTheSystem from "@/components/InsideTheSystem";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AuthorityFraming from "@/components/AuthorityFraming";
import QualificationForm from "@/components/QualificationForm";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <IntegratedWith />
      <WhatWeDeploy />
      <HowItWorks />
      <CaseStudy />
      <Comparison />
      <Features />
      <DeploymentTimeline />
      <Pricing />
      <InsideTheSystem />
      <Testimonials />
      <FAQ />
      <AuthorityFraming />
      <QualificationForm />
      <ClosingSection />
      <Footer />
      <StickyBottomCTA />
    </div>
  );
};

export default Index;
