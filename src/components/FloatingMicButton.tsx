import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const FloatingMicButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 1.2, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center mic-button-premium"
      aria-label="Talk to AI"
    >
      {/* Pulse ring animation */}
      <motion.span
        className="absolute inset-0 rounded-full bg-primary/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Mic className="w-6 h-6 relative z-10" />
    </motion.button>
  );
};

export default FloatingMicButton;
