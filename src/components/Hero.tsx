import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const VIMEO_VIDEO_ID = "1156355064";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchDemo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">
                Powered by Advanced AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              Transform Your Business with{" "}
              <span className="gradient-text">AI-Powered Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              AI Receptionists that never sleep. 
              High-end web design that converts. We're Oryx.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ y: "-60vh" }}
                animate={{ y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 8,
                  mass: 1,
                  velocity: 2,
                  delay: 0.3,
                }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-semibold group shadow-[0_0_30px_hsl(265_85%_65%/0.4),0_0_60px_hsl(265_85%_65%/0.2)] hover:shadow-[0_0_40px_hsl(265_85%_65%/0.5),0_0_80px_hsl(265_85%_65%/0.3)] transition-shadow"
                >
                  Test Drive Our AI
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ y: "-60vh" }}
                animate={{ y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 8,
                  mass: 1,
                  velocity: 2,
                  delay: 0.45,
                }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 font-semibold border-primary/30 hover:border-primary/50 hover:bg-primary/10 shadow-[0_0_20px_hsl(265_85%_65%/0.1)] hover:shadow-[0_0_30px_hsl(265_85%_65%/0.2)] transition-all"
                  onClick={handleWatchDemo}
                >
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12"
            >
              {[
                { value: "500+", label: "Businesses Served" },
                { value: "10k+", label: "Calls Handled Daily" },
                { value: "4.9★", label: "Average Review Score" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image / Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Spotlight glow behind video - positioned outside overflow container */}
              <AnimatePresence>
                {showVideo && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="absolute -inset-12 rounded-3xl pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(255, 250, 230, 0.95) 0%, rgba(255, 220, 120, 0.7) 25%, rgba(255, 200, 80, 0.45) 50%, rgba(255, 180, 50, 0.2) 70%, transparent 85%)",
                      filter: "blur(40px)",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Floating card mockup */}
              <motion.div
                className="relative rounded-2xl overflow-hidden glass glow"
                animate={!showVideo ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{ duration: 6, repeat: showVideo ? 0 : Infinity, ease: "easeInOut" }}
              >
                {/* Hero Image */}
                <img
                  src={heroImage}
                  alt="AI Technology"
                  className="w-full h-auto rounded-2xl"
                />

                {/* Falling Video Overlay */}
                <AnimatePresence>
                  {showVideo && (
                    <motion.div
                      initial={{ y: "-100vh", opacity: 1 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100vh", opacity: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        mass: 1.2,
                      }}
                      className="absolute inset-0 z-20 rounded-2xl overflow-hidden"
                    >
                      <iframe
                        src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&loop=0&muted=0`}
                        className="w-full h-full rounded-2xl"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Demo Video"
                      />
                      {/* Close button */}
                      <button
                        onClick={handleCloseVideo}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-30"
                      >
                        <X className="w-5 h-5 text-foreground" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Overlay glass card - hide when video is playing */}
                {!showVideo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">AI</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">AI Receptionist Active</div>
                        <div className="text-xs text-muted-foreground">Handling 47 calls right now</div>
                      </div>
                      <div className="ml-auto">
                        <span className="w-3 h-3 rounded-full bg-primary inline-block animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-sm"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
