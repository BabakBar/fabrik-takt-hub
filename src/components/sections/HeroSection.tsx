import { useState } from "react";
import { motion, useMotionTemplate } from "motion/react";
import { Button } from "../ui/button";
import { BrainCog, Sparkles, Mic, ArrowRight, Target, Zap, Database } from "lucide-react";
import PilotModal from "../modals/PilotModal";
import { hoverVariants, useRevealOnScroll, useCountUp } from "../../hooks/useAnimations";

const accent = "#F9A825";
const slateGray = "#2F4F4F";
const industrial = "#E5E5E5";

const HeroSection = () => {
  const [pilotModal, setPilotModal] = useState(false);
  
  // Stats counter animations
  const { ref: statsRef, isInView: statsVisible } = useRevealOnScroll(0.5);
  const count95 = useCountUp(95, 2, statsVisible);
  const count3 = useCountUp(3, 2, statsVisible); // For "2-3s" we'll animate to 3
  const count1000 = useCountUp(1000, 2.5, statsVisible);

  // Create animated counter component
  const AnimatedCounter = ({ value, suffix = '', label, prefix = '' }) => {
    const display = useMotionTemplate`${prefix}${value}${suffix}`;
    
    return (
      <div className="flex flex-col items-center">
        <motion.span
          style={{
            color: accent,
            fontWeight: 700,
            fontSize: "2rem",
            letterSpacing: "0.02em",
          }}
        >
          {display}
        </motion.span>
        <span
          style={{
            color: "#d4dbe2",
            fontSize: "1rem",
            marginTop: 2,
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {label}
        </span>
      </div>
    );
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%)",
        position: "relative",
      }}
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${accent} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(249, 168, 37, 0.1) 0%, transparent 40%)",
        }}
      />
      <div className="max-w-7xl w-full mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 items-center relative z-10">
        {/* LEFT: Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          {/* Simplified Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md w-fit"
            style={{
              background: "rgba(249, 168, 37, 0.1)",
              border: "1px solid rgba(249, 168, 37, 0.2)",
              boxShadow: "0 4px 20px rgba(249, 168, 37, 0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BrainCog size={16} className="mr-2" style={{ color: accent }} />
            <span style={{ 
              color: accent, 
              fontSize: "0.875rem", 
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }}>
              AI Manufacturing Intelligence
            </span>
          </motion.div>

          {/* Main headline with better hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="mb-6">
              <span style={{
                color: "#94a3b8",
                fontSize: "1.25rem",
                fontWeight: 500,
                display: "block",
                marginBottom: "0.75rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>
                Your Factory's AI Brain
              </span>
              <span style={{
                color: "#ffffff",
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                display: "block"
              }}>
                Turn Chaos into
                <span style={{ 
                  color: accent, 
                  display: "block",
                  marginTop: "-0.1em"
                }}>
                   Clarity
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Improved Subheadline */}
          <motion.div 
            className="mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{
              color: "#e2e8f0",
              fontSize: "1.25rem",
              lineHeight: 1.6,
              marginBottom: "0.5rem",
              fontWeight: 400
            }}>
              Capture, structure, and retrieve operational insights instantly.
            </p>
            <p style={{
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.5,
              fontWeight: 400
            }}>
              Purpose-built for SMEs to democratize shop floor tribal knowledge.
            </p>
          </motion.div>

          {/* Refined CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              style={{
                background: accent,
                color: "#1a1f2e",
                padding: "1rem 2rem",
                fontSize: "1.125rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                transition: "all 0.2s",
                boxShadow: "0 4px 20px rgba(249, 168, 37, 0.3)",
                border: "none",
              }}
              onClick={() => setPilotModal(true)}
            >
              <span className="relative z-10 flex items-center">
                Join Pilot Program
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #FFB84D 0%, #F9A825 100%)",
                }}
              />
            </Button>
            
            <Button
              size="lg"
              variant="ghost"
              className="group"
              style={{
                color: "#e2e8f0",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "1rem 2rem",
                fontSize: "1.125rem",
                fontWeight: 500,
                borderRadius: "0.5rem",
                transition: "all 0.2s",
                background: "transparent",
              }}
            >
              Watch Demo
              <motion.span
                className="ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div 
            ref={statsRef}
            className="mt-16 p-6 rounded-2xl backdrop-blur-md"
            style={{
              background: "rgba(45, 55, 72, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Target className="mx-auto mb-3 h-8 w-8" style={{ color: accent }} />
                <AnimatedCounter 
                  value={count95} 
                  suffix="%" 
                  label="Recognition Accuracy" 
                />
              </div>
              <div className="text-center">
                <Zap className="mx-auto mb-3 h-8 w-8" style={{ color: accent }} />
                <AnimatedCounter 
                  value={count3} 
                  prefix="2-" 
                  suffix="s" 
                  label="Processing Speed" 
                />
              </div>
              <div className="text-center">
                <Database className="mx-auto mb-3 h-8 w-8" style={{ color: accent }} />
                <AnimatedCounter 
                  value={count1000} 
                  suffix="+" 
                  label="Knowledge Entries" 
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Enhanced Chat demo */}
        <motion.div 
          className="hidden lg:flex w-1/2 items-center justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative rounded-2xl p-0"
            style={{
              background: "rgba(30, 35, 45, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              minWidth: 450,
              maxWidth: 480,
              minHeight: 450,
              transform: "perspective(1000px) rotateY(-5deg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {/* Enhanced Chat header */}
            <div
              className="flex items-center gap-4 px-6 py-5"
              style={{ 
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(135deg, rgba(249,168,37,0.02) 0%, rgba(47,79,79,0.03) 100%)"
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, #FFB84D 100%)`,
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  minHeight: 44,
                  boxShadow: '0 6px 20px -2px rgba(249,168,37,0.4), 0 2px 8px -1px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <BrainCog size={24} color="#fff" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "1.15rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    FabrikTakt Bot
                  </span>
                  <span
                    style={{
                      background: "rgba(56,210,101,0.15)",
                      color: "#38D265",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "12px",
                      border: "1px solid rgba(56,210,101,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.02em"
                    }}
                  >
                    AI
                  </span>
                </div>
                <div className="flex items-center mt-2 gap-2">
                  <span
                    style={{
                      background: "linear-gradient(135deg, #38D265 0%, #2BC653 100%)",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      display: "inline-block",
                      boxShadow: "0 0 0 2px rgba(56,210,101,0.3), 0 0 8px rgba(56,210,101,0.4)",
                      animation: "pulse-status 2s ease-in-out infinite",
                    }}
                  />
                  <span style={{ 
                    color: "#9CA3AF", 
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    letterSpacing: "0.01em"
                  }}>
                    Manufacturing Intelligence Online
                  </span>
                </div>
              </div>
            </div>

            {/* Voice Message bubble */}
            <div className="px-5 mt-6 flex flex-row w-full justify-end">
              <div
                className="rounded-xl py-3 px-4"
                style={{
                  background: accent,
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "1rem",
                  boxShadow: "0 2px 8px 0 rgba(249,168,37,0.08)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Mic size={20} color="#fff" strokeWidth={2.2} />
                  <span>Voice message 0:15</span>
                </div>
                <span className="font-medium">
                  CNC machine #452 stopped working
                </span>
              </div>
            </div>

            {/* Enhanced processing indicator */}
            <div className="px-5 mt-4">
              <motion.div
                className="rounded-md py-2 px-4 inline-flex items-center gap-3"
                style={{
                  background: "#374151",
                  color: "#D7DDF3",
                  fontWeight: 500,
                  fontSize: "1rem",
                  minWidth: 180,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      style={{
                        background: accent,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: 2,
                      }}
                      animate={{ 
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </span>
                Processing...
              </motion.div>
            </div>

            {/* Enhanced solution bubble with reveal animation */}
            <motion.div 
              className="px-5 mt-5 flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <motion.div
                className="rounded-xl bg-white py-4 px-5 flex flex-col gap-2"
                style={{
                  minWidth: 300,
                  boxShadow: "0 2px 8px 0 rgba(47,79,79,0.08)",
                  border: "1.5px solid #E5E5E5",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles
                    size={18}
                    color={accent}
                    strokeWidth={2.1}
                    style={{ borderRadius: "6px", background: "#fff" }}
                  />
                  <span style={{ color: slateGray, fontWeight: 700 }}>
                    Solution Found
                  </span>
                </div>
                <div
                  style={{
                    color: slateGray,
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  Likely issue: Spindle motor failure.
                  <br />
                  Check: Power cable, fuse, and temperature sensor
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span style={{ color: "#38D265", fontWeight: 600, fontSize: "0.98rem" }}>
                    Solved in 0.8s
                  </span>
                  <span style={{ color: "#888b97", fontWeight: 400, fontSize: "0.94rem" }}>
                    98% match
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom fade for scroll affordance */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(26, 31, 46, 0.8) 0%, transparent 100%)",
        }}
      />
      
      {/* Keep pulse-status keyframes for other elements */}
      <style>
        {`
        @keyframes pulse-status {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        `}
      </style>

      {/* Place modal at the end of the section for accessibility */}
      <PilotModal isOpen={pilotModal} onClose={() => setPilotModal(false)} />
    </section>
  );
};

export default HeroSection;
