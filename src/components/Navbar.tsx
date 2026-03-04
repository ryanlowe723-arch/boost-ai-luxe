import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import oryxLogo from "@/assets/oryx-logo.png";

const navLinks = [
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Results", href: "/results" },
  { name: "Pricing", href: "/#pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname, navigate]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo + Phone */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={oryxLogo} alt="Oryx" className="w-[52px] h-[52px]" />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => {
              const linkContent = (
                <motion.span
                  className={`hover:text-foreground transition-colors duration-300 text-sm font-medium inline-block ${isActive(link.href) ? 'text-foreground' : 'text-muted-foreground/80'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                </motion.span>
              );
              return link.href.startsWith("/#") ? (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {linkContent}
                </a>
              ) : (
                <Link key={link.name} to={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {linkContent}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button asChild className="btn-primary-premium text-primary-foreground rounded-full px-6 font-medium">
              <a
                href="https://cal.com/oryx-systems/oryxdemo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-muted/60 border border-border/50 text-foreground backdrop-blur-sm"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden mt-4"
            >
              <div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl p-5 shadow-lg">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => {
                    const mobileContent = (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index, duration: 0.2 }}
                        className={`hover:text-foreground hover:bg-muted/50 transition-colors duration-200 text-sm font-medium py-3 px-4 rounded-xl block ${isActive(link.href) ? 'text-foreground bg-muted/30' : 'text-muted-foreground'}`}
                      >
                        {link.name}
                      </motion.span>
                    );
                    return link.href.startsWith("/#") ? (
                      <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                        {mobileContent}
                      </a>
                    ) : (
                      <Link key={link.name} to={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                        {mobileContent}
                      </Link>
                    );
                  })}
                  {/* Mobile phone link */}
                  <a href="tel:+447840914292" className="flex items-center gap-2 text-sm text-muted-foreground py-3 px-4 rounded-xl hover:bg-muted/50 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    +44 7840 914292
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <Button asChild className="btn-primary-premium text-primary-foreground rounded-full px-6 font-medium w-full">
                <a href="https://cal.com/oryx-systems/oryxdemo" target="_blank" rel="noopener noreferrer">
                 Book Strategy Call
               </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
