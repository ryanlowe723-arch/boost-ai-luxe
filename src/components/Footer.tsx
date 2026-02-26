import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { name: "AI Receptionists", href: "/services/ai-receptionists" },
    { name: "Review Generation", href: "/services/review-generation" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "Automation", href: "/services/automation" },
  ],
  Company: [
    { name: "About Us", href: "/company/about" },
    { name: "Case Studies", href: "/company/case-studies" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact", href: "/company/contact" },
  ],
  Resources: [
    { name: "Blog", href: "/resources/blog" },
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
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
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
              <p className="text-muted-foreground text-sm max-w-xs">
                We deploy AI revenue capture systems for service businesses — so you stop losing jobs to missed calls and slow follow-up.
              </p>
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
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
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
          className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2026 Oryx. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
