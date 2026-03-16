import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "AI Receptionists", href: "/services/ai-receptionists" },
    { name: "Revenue Websites", href: "/services/revenue-websites" },
    { name: "AI Chat Systems", href: "/services/ai-chat-systems" },
    { name: "CRM Automation", href: "/services/crm-automation" },
    { name: "Review Automation", href: "/services/review-automation" },
  ],
  Company: [
    { name: "About Us", href: "/company/about" },
    { name: "Results", href: "/results" },
    { name: "Contact", href: "/company/contact" },
  ],
  Resources: [
    { name: "Documentation", href: "/resources/documentation" },
    { name: "Support", href: "/resources/support" },
    { name: "Status", href: "/resources/status" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms-of-service" },
    { name: "Cookie Policy", href: "/legal/cookie-policy" },
  ],
};

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
          {/* Logo and description */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img src="/oryx-logo.png" alt="Oryx Logo" className="w-10 h-10" />
                <span className="font-display font-bold text-xl text-foreground">
                  Oryx
                </span>
              </Link>
              <p className="text-muted-foreground text-xs sm:text-sm max-w-xs mb-4">
                We deploy AI revenue infrastructure for service businesses — so you capture every lead, automate every follow-up, and dominate your local market.
              </p>
              {/* Contact info */}
              <div className="space-y-2">
                <a href="mailto:ryan@oryxaiautomations.com" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="break-all">ryan@oryxaiautomations.com</span>
                </a>
                <a href="tel:+447840914292" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +44 7840 914292
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm">{category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2026 Oryx. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://www.instagram.com/oryxaisystems/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558745497496"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href="https://x.com/AiOryx34667"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors duration-200"
            >
              X
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;