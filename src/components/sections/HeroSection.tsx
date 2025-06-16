import { useState } from "react";
import { motion, useMotionTemplate } from "motion/react";
import { Button } from "../ui/button";
import { BrainCog, Sparkles, Mic } from "lucide-react";
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
        background:
          "radial-gradient(ellipse at 60% 60%, #222A33 70%, #202532 100%)",
        backgroundColor: "#222A33",
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
        {/* LEFT: Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          {/* Enhanced Badge */}
          <div
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-base w-fit"
            style={{
              background: "linear-gradient(135deg, rgba(249,168,37,0.15) 0%, rgba(249,168,37,0.08) 100%)",
              boxShadow: `
                0 2px 12px rgba(0,0,0,0.08),
                0 0 20px rgba(249, 168, 37, 0.25),
                inset 0 1px 0 rgba(255,255,255,0.1),
                inset 0 0 1px 1px rgba(249,168,37,0.4)
              `,
              color: accent,
              border: `1px solid rgba(249,168,37,0.6)`,
              fontWeight: 600,
              letterSpacing: "0.005em",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              className="flex items-center justify-center rounded-full mr-3"
              style={{
                background: `linear-gradient(135deg, ${accent} 0%, #FFB84D 100%)`,
                width: 32,
                height: 32,
                boxShadow: "0 2px 8px rgba(249,168,37,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <BrainCog size={18} color="#fff" strokeWidth={2.5} />
            </span>
            <span className="mr-3">AI-Powered Intelligence Hub</span>
            <span
              className="inline-block rounded-full"
              style={{
                background: "linear-gradient(135deg, #38D265 0%, #2BC653 100%)",
                width: 8,
                height: 8,
                boxShadow: "0 0 0 2px rgba(56,210,101,0.3), 0 0 8px rgba(56,210,101,0.4)",
                animation: "pulse-status 2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Main headline */}
          <h1
            style={{
              color: industrial,
              fontWeight: 800,
              fontSize: "clamp(2.6rem, 5vw, 3.5rem)",
              lineHeight: 1.13,
              letterSpacing: "-.015em",
            }}
            className="mb-2"
          >
            Your Factory&apos;s AI Brain.
            <br />
            <span style={{ color: accent, fontWeight: 900 }}>
              Turn Chaos into Clarity
            </span>
          </h1>

          {/* Subtext/description */}
          <p
            style={{
              color: "#d4dbe2",
              fontSize: "1.19rem",
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: 520,
            }}
            className="mb-2"
          >
            Capture, structure, and retrieve operational insights instantly.
          </p>

          {/* Call to action row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <motion.div
              variants={hoverVariants.button}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              style={{
                display: "inline-block",
              }}
            >
              <Button
                size="lg"
                className="rounded-xl px-8 py-4 text-lg font-semibold shadow-none"
                style={{
                  background: accent,
                  color: "#fff",
                  boxShadow: "0 8px 32px 0 rgba(249,168,37,0.12)",
                  minWidth: 200,
                  minHeight: 56,
                  border: "none",
                  width: "100%",
                }}
                onClick={() => setPilotModal(true)}
              >
                <motion.div
                  variants={hoverVariants.sparkle}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  style={{ 
                    marginRight: 8,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Sparkles size={22} color="#fff" />
                </motion.div>
                Join Pilot Program
              </Button>
            </motion.div>
            <motion.div
              variants={hoverVariants.secondaryButton}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              style={{
                display: "inline-block",
              }}
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-4 text-lg font-semibold"
                style={{
                  background: "transparent",
                  color: "#d4dbe2",
                  border: `1.4px solid #576071`,
                  minWidth: 200,
                  minHeight: 56,
                  width: "100%",
                }}
              >
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Divider line */}
          <div
            style={{
              height: 1.5,
              background:
                "linear-gradient(90deg,rgba(249,168,37,0) 6%,rgba(249,168,37,0.32) 40%,rgba(249,168,37,.18) 60%,rgba(249,168,37,0) 94%)",
              borderRadius: 64,
              marginTop: 38,
              marginBottom: 18,
              opacity: 0.7,
            }}
          />

          {/* Stats row with animated counters */}
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-3 gap-4 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatedCounter 
              value={count95} 
              suffix="%+" 
              label="Recognition Accuracy" 
            />
            <AnimatedCounter 
              value={count3} 
              prefix="2-" 
              suffix="s" 
              label="Processing Speed" 
            />
            <AnimatedCounter 
              value={count1000} 
              suffix="+" 
              label="Knowledge Entries" 
            />
          </motion.div>
        </div>

        {/* RIGHT: Chat demo */}
        <div className="hidden md:flex w-1/2 items-center justify-end">
          <div
            className="relative rounded-2xl p-0"
            style={{
              background: "rgba(38,44,56,0.75)",
              border: "1.5px solid #2F4F4F",
              minWidth: 410,
              maxWidth: 440,
              minHeight: 420,
              boxShadow: "0 8px 32px 0 rgba(60,64,79,0.18)",
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
        </div>
      </div>

      {/* Enhanced scroll indicator with Motion */}
      <motion.div
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.span
          style={{
            color: "#d4dbe2",
            fontSize: "1.04rem",
            fontWeight: 400,
            marginBottom: 12,
            letterSpacing: "0.01em",
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Explore More
        </motion.span>
        
        <motion.svg 
          width="34" 
          height="48" 
          viewBox="0 0 34 48" 
          fill="none"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <rect
            x="2" y="2" width="30" height="44" rx="15"
            stroke="#E5E5E5" strokeWidth="3.2" fill="none"
          />
          <motion.circle
            cx="17" cy="14" r="3" fill={accent}
            animate={{ y: [0, 14, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
        
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
      </motion.div>

      {/* Place modal at the end of the section for accessibility */}
      <PilotModal isOpen={pilotModal} onClose={() => setPilotModal(false)} />
    </section>
  );
};

export default HeroSection;
