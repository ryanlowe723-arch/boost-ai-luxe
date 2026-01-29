import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingMicButton from "@/components/FloatingMicButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingMicButton />
    </div>
  );
};

export default Index;
