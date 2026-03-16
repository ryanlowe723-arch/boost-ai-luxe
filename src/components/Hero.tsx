import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import VideoPlayer, { VideoPlayerHandle } from "@/components/VideoPlayer";

// Direct MP4 URL for the demo video (1440p Cloudinary source)
const VIDEO_SRC = "https://res.cloudinary.com/dlarqfvl1/video/upload/v1769769885/cnr-vsl_3__revised_1440p_rfrajh.mp4";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoPlayerRef = useRef<VideoPlayerHandle>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  const handleWatchDemo = () => {
    const isMobile = window.innerWidth < 1024;
    isMobileRef.current = isMobile;
    setShowVideo(true);
    
    if (isMobile) {
      setTimeout(() => {
        mobileContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          videoPlayerRef.current?.play();
        }, 300);
      }, 100);
    }
  };

  const handleCloseVideo = () => {
    videoPlayerRef.current?.pause();
    setShowVideo(false);
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                AI Revenue Infrastructure — Live
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6"
            >
              Use AI to Recover{" "}
              <span className="gradient-text">£5K–£20K/Month</span> in Lost Revenue From Your Service Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-base sm:text-lg text-muted-foreground max-w-none mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed"
            >
              We deploy end-to-end AI revenue infrastructure that captures, nurtures, and converts every lead on autopilot.
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
                  asChild
                  size="lg" 
                   className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group"
                >
                  <a href="tel:+441564335014">
                    Test The AI Live
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
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

            {/* Social proof trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-xs text-muted-foreground/60 mt-5 text-center lg:text-left tracking-wide"
            >
              ⭐ 4.9/5 Client Rating · 30+ Businesses Deployed
            </motion.p>

            {/* Stats - visually separated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-border/40"
            >
              {[
                { value: "30+", label: "Service Businesses Deployed" },
                { value: "12,000+", label: "Calls Handled Monthly" },
                { value: "99.9%", label: "Uptime · <2s Response" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image / Video (Desktop) */}
          <motion.div
            ref={desktopContainerRef}
            id="demo-video"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Spotlight glow behind video */}
              <AnimatePresence>
                {showVideo && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="absolute -inset-12 rounded-3xl pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(178, 77, 255, 0.5) 0%, rgba(178, 77, 255, 0.3) 25%, rgba(178, 77, 255, 0.15) 50%, rgba(178, 77, 255, 0.05) 70%, transparent 85%)",
                      filter: "blur(40px)",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Floating card mockup */}
              <motion.div
                className={`relative rounded-2xl overflow-hidden border border-border/30 ${showVideo ? 'bg-black' : 'bg-gradient-to-br from-muted/40 to-muted/20'}`}
                style={{
                  boxShadow: "0 24px 48px -12px hsl(260 30% 20% / 0.1), 0 8px 16px -8px hsl(260 30% 20% / 0.06), inset 0 1px 0 hsl(0 0% 100% / 0.5)"
                }}
                animate={!showVideo ? { y: [0, -8, 0] } : { y: 0 }}
                transition={{ duration: 8, repeat: showVideo ? 0 : Infinity, ease: "easeInOut" }}
              >
                {!showVideo && (
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 50% 30%, hsl(265 50% 95% / 0.6) 0%, transparent 60%)"
                    }}
                  />
                )}
                <img
                  src={heroImage}
              alt="Oryx AI Revenue Infrastructure dashboard showing call capture and lead management for service businesses"
              className="w-full h-auto rounded-2xl relative z-10 opacity-95 saturate-[0.92]"
              fetchPriority="high"
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
                      {/* Desktop: only render video if not mobile */}
                      {!isMobileRef.current && (
                        <VideoPlayer
                          ref={videoPlayerRef}
                          src={VIDEO_SRC}
                          poster={heroImage}
                          className="rounded-2xl"
                          autoPlay={true}
                        />
                      )}
                      <button
                        onClick={handleCloseVideo}
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center z-30 hover:opacity-70 transition-opacity"
                      >
                        <X className="w-6 h-6 text-black" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Overlay glass card */}
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
                        <div className="text-xs text-muted-foreground mt-0.5">Handling {Math.floor(Math.random() * 15) + 4} calls right now</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground font-medium">Live</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              <div 
                className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl opacity-30 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, hsl(265 50% 92%) 0%, hsl(230 40% 94%) 100%)"
                }}
              />
            </div>

            {/* Book Demo button below video */}
            <AnimatePresence>
              {showVideo && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-6 flex justify-center"
                >
                  <Button
                    asChild
                    size="lg"
                    className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group"
                    onClick={handleCloseVideo}
                  >
                    <a
                      href="https://cal.com/oryx-systems/oryxdemo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Strategy Call
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mobile Hero Image with Inline Video */}
          <motion.div
            ref={mobileContainerRef}
            id="demo-video-mobile"
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
                      alt="Oryx AI Revenue Infrastructure dashboard showing call capture and lead management for service businesses"
                      className="w-full h-full object-cover rounded-2xl opacity-95 saturate-[0.92]"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                          <span className="text-primary-foreground font-bold text-xs">AI</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-foreground tracking-tight">AI Receptionist Active</div>
                          <div className="text-xs text-muted-foreground">Handling {Math.floor(Math.random() * 15) + 4} calls right now</div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showVideo && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                  >
                    {/* Mobile: only render video if mobile */}
                    {isMobileRef.current && (
                      <VideoPlayer
                        ref={videoPlayerRef}
                        src={VIDEO_SRC}
                        poster={heroImage}
                        className="rounded-2xl"
                        autoPlay={false}
                      />
                    )}
                    <button
                      onClick={handleCloseVideo}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center z-30 hover:opacity-70 transition-opacity"
                    >
                      <X className="w-5 h-5 text-black" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {showVideo && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-4 flex justify-center"
                >
                  <Button
                    asChild
                    size="lg"
                    className="btn-primary-premium text-primary-foreground rounded-full px-8 font-semibold group"
                    onClick={handleCloseVideo}
                  >
                    <a
                      href="https://cal.com/oryx-systems/oryxdemo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Strategy Call
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
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
