import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 hero-texture" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10 px-6"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-8xl md:text-9xl font-display font-bold gradient-text mb-4"
          >
            404
          </motion.h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold"
            >
              <Link to="/">
                <Home className="mr-2 w-4 h-4" />
                Back to Homepage
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-ghost-premium rounded-full px-8 font-medium text-muted-foreground"
            >
              <a href="https://cal.com/oryx-systems/oryxdemo" target="_blank" rel="noopener noreferrer">
                Book Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
