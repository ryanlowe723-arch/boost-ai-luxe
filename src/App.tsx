import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

// Service pages
import AIReceptionists from "./pages/services/AIReceptionists";
import ReviewGeneration from "./pages/services/ReviewGeneration";
import WebDesign from "./pages/services/WebDesign";
import Automation from "./pages/services/Automation";
import AIChat from "./pages/services/AIChat";

// Company pages
import About from "./pages/company/About";
import CaseStudies from "./pages/company/CaseStudies";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";

// Resource pages
import Blog from "./pages/resources/Blog";
import BlogPost from "./pages/resources/BlogPost";
import Documentation from "./pages/resources/Documentation";
import Support from "./pages/resources/Support";
import Status from "./pages/resources/Status";

// Legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/results" element={<Results />} />
          {/* Service Routes */}
          <Route path="/services/ai-receptionists" element={<AIReceptionists />} />
          <Route path="/services/review-generation" element={<ReviewGeneration />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/ai-chat" element={<AIChat />} />
          
          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/case-studies" element={<CaseStudies />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/contact" element={<Contact />} />
          
          {/* Resource Routes */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:slug" element={<BlogPost />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/support" element={<Support />} />
          <Route path="/resources/status" element={<Status />} />
          
          {/* Legal Routes */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
