import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ essential: true, analytics: true, marketing: true }));
    setVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ essential: true, analytics, marketing }));
    setVisible(false);
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-16 sm:bottom-14 left-0 right-0 z-50 px-4 pb-4"
        >
          <div
            className="max-w-2xl mx-auto rounded-2xl border border-border/30 p-5 shadow-xl"
            style={{
              background: "hsl(0 0% 12% / 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {!showPreferences ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm text-white/80 flex-1">
                  We use cookies to improve your experience and analyse site traffic.
                </p>
                <div className="flex gap-2 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowPreferences(true)}
                    className="rounded-full border-white/20 text-white/70 hover:text-white hover:bg-white/10 text-xs"
                  >
                    Manage Preferences
                  </Button>
                  <Button
                    size="sm"
                    onClick={acceptAll}
                    className="btn-primary-premium text-primary-foreground rounded-full text-xs px-5"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">Cookie Preferences</h3>
                  <button onClick={() => setShowPreferences(false)} className="text-white/50 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3 mb-4">
                  <label className="flex items-center justify-between">
                    <span className="text-xs text-white/70">Essential (always on)</span>
                    <div className="w-9 h-5 rounded-full bg-primary/60 relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white" />
                    </div>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer" onClick={() => setAnalytics(!analytics)}>
                    <span className="text-xs text-white/70">Analytics</span>
                    <div className={`w-9 h-5 rounded-full relative transition-colors ${analytics ? 'bg-primary/60' : 'bg-white/20'}`}>
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${analytics ? 'right-0.5' : 'left-0.5'}`} />
                    </div>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer" onClick={() => setMarketing(!marketing)}>
                    <span className="text-xs text-white/70">Marketing</span>
                    <div className={`w-9 h-5 rounded-full relative transition-colors ${marketing ? 'bg-primary/60' : 'bg-white/20'}`}>
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${marketing ? 'right-0.5' : 'left-0.5'}`} />
                    </div>
                  </label>
                </div>
                <Button size="sm" onClick={savePreferences} className="btn-primary-premium text-primary-foreground rounded-full text-xs px-5 w-full">
                  Save Preferences
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
