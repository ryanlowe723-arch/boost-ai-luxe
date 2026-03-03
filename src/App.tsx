import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

// Service pages
import AIReceptionists from "./pages/services/AIReceptionists";
import ReviewAutomation from "./pages/services/ReviewAutomation";
import RevenueWebsites from "./pages/services/RevenueWebsites";
import CRMAutomation from "./pages/services/CRMAutomation";
import AIChatSystems from "./pages/services/AIChatSystems";

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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/results" element={<Results />} />
          {/* Service Routes */}
          <Route path="/services/ai-receptionists" element={<AIReceptionists />} />
          <Route path="/services/review-automation" element={<ReviewAutomation />} />
          <Route path="/services/revenue-websites" element={<RevenueWebsites />} />
          <Route path="/services/crm-automation" element={<CRMAutomation />} />
          <Route path="/services/ai-chat-systems" element={<AIChatSystems />} />
          
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
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
