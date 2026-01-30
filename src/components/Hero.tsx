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
      {/* Hero background with subtle texture */}
      <div className="absolute inset-0 hero-texture" />
      
      {/* Subtle radial glow behind headline area */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(ellipse, hsl(265 60% 92%) 0%, transparent 70%)",
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-[500px] h-[350px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, hsl(230 50% 94%) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-muted/60 border border-border/50 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                Powered by Advanced AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
            >
              Transform Your Business with{" "}
              <span className="gradient-text">AI-Powered Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              AI Receptionists that never sleep. 
              High-end web design that converts. We're Oryx.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Button 
                  size="lg" 
                  className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group"
                >
                  Test Drive Our AI
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="btn-ghost-premium rounded-full px-8 font-medium text-muted-foreground"
                  onClick={handleWatchDemo}
                >
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Stats - visually separated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start mt-14 pt-10 border-t border-border/40"
            >
              {[
                { value: "500+", label: "Businesses Served" },
                { value: "50k+", label: "Calls Handled Monthly" },
                { value: "99.9%", label: "Uptime Guaranteed" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image / Video (Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-muted/40 to-muted/20 border border-border/30"
                style={{
                  boxShadow: "0 24px 48px -12px hsl(260 30% 20% / 0.1), 0 8px 16px -8px hsl(260 30% 20% / 0.06), inset 0 1px 0 hsl(0 0% 100% / 0.5)"
                }}
                animate={!showVideo ? { y: [0, -8, 0] } : { y: 0 }}
                transition={{ duration: 8, repeat: showVideo ? 0 : Infinity, ease: "easeInOut" }}
              >
                {/* Subtle radial wash behind the image */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 30%, hsl(265 50% 95% / 0.6) 0%, transparent 60%)"
                  }}
                />
                {/* Hero Image */}
                <img
                  src={heroImage}
                  alt="AI Technology"
                  className="w-full h-auto rounded-2xl relative z-10 opacity-95 saturate-[0.92]"
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
                    transition={{ delay: 0.8, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                        <span className="text-primary-foreground font-bold text-sm">AI</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground tracking-tight">AI Receptionist Active</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Handling 47 calls right now</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground font-medium">Live</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Decorative element - subtle */}
              <div 
                className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl opacity-30 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, hsl(265 50% 92%) 0%, hsl(230 40% 94%) 100%)"
                }}
              />
            </div>
          </motion.div>

          {/* Mobile Hero Image with Inline Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden mt-10"
          >
            <div 
              className="relative rounded-2xl overflow-hidden border border-border/30 aspect-video"
              style={{
                boxShadow: "0 16px 32px -8px hsl(260 30% 20% / 0.1)"
              }}
            >
              {/* Hero Image - fades out when video plays */}
              <AnimatePresence>
                {!showVideo && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={heroImage}
                      alt="AI Technology"
                      className="w-full h-full object-cover rounded-2xl opacity-95 saturate-[0.92]"
                    />
                    {/* Mobile glass card overlay */}
                    <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                          <span className="text-primary-foreground font-bold text-xs">AI</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-foreground tracking-tight">AI Receptionist Active</div>
                          <div className="text-xs text-muted-foreground">Handling 47 calls right now</div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Inline Video - fades in when triggered */}
              <AnimatePresence>
                {showVideo && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&loop=0&muted=1&playsinline=1`}
                      className="w-full h-full rounded-2xl"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Demo Video"
                    />
                    {/* Minimal close button */}
                    <button
                      onClick={handleCloseVideo}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors z-30"
                    >
                      <X className="w-4 h-4 text-foreground" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-muted-foreground/20 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.8, 0.2, 0.8], y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-primary/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
