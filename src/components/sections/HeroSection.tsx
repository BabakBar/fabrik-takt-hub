import React, { useState } from "react";
import { Button } from "../ui/button";
import { BrainCog, Sparkles, Mic } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import PilotModal from "../modals/PilotModal";

const accent = "#F9A825";
const slateGray = "#2F4F4F";
const industrial = "#E5E5E5";

const HeroSection = () => {
  const { t } = useLanguage();
  const [pilotModal, setPilotModal] = useState(false);

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
              Turn Chaos into Clarity.
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
            FabrikTakt captures hidden knowledge and real-time data, providing actionable insights to empower your team, boost efficiency, and reduce downtime.
          </p>

          {/* Call to action row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              size="lg"
              className="rounded-xl px-8 py-4 text-lg font-semibold shadow-none"
              style={{
                background: accent,
                color: "#fff",
                boxShadow: "0 8px 32px 0 rgba(249,168,37,0.12)",
                minWidth: 200,
                minHeight: 56,
                transition: "transform .18s cubic-bezier(.33,1,.68,1)",
                border: "none",
              }}
              onClick={() => setPilotModal(true)}
            >
              <Sparkles size={22} color="#fff" style={{ marginRight: 8 }} />
              Join Pilot Program
            </Button>
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
              }}
            >
              See How It Works
            </Button>
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

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            <div className="flex flex-col items-center">
              <span
                style={{
                  color: accent,
                  fontWeight: 700,
                  fontSize: "2rem",
                  letterSpacing: "0.02em",
                }}
              >
                95%+
              </span>
              <span
                style={{
                  color: "#d4dbe2",
                  fontSize: "1rem",
                  marginTop: 2,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              >
                Recognition Accuracy
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                style={{
                  color: accent,
                  fontWeight: 700,
                  fontSize: "2rem",
                  letterSpacing: "0.02em",
                }}
              >
                2-3s
              </span>
              <span
                style={{
                  color: "#d4dbe2",
                  fontSize: "1rem",
                  marginTop: 2,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              >
                Processing Speed
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                style={{
                  color: accent,
                  fontWeight: 700,
                  fontSize: "2rem",
                  letterSpacing: "0.02em",
                }}
              >
                1000+
              </span>
              <span
                style={{
                  color: "#d4dbe2",
                  fontSize: "1rem",
                  marginTop: 2,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              >
                Knowledge Entries
              </span>
            </div>
          </div>
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

            {/* Processing indicator */}
            <div className="px-5 mt-4">
              <div
                className="rounded-md py-2 px-4 inline-flex items-center gap-3"
                style={{
                  background: "#374151",
                  color: "#D7DDF3",
                  fontWeight: 500,
                  fontSize: "1rem",
                  minWidth: 180,
                }}
              >
                <span className="flex gap-1">
                  <span
                    style={{
                      background: accent,
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: 2,
                      animation: "pulse 1.2s infinite",
                    }}
                  />
                  <span
                    style={{
                      background: accent,
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: 2,
                      animation: "pulse 1.2s infinite 0.1s",
                    }}
                  />
                  <span
                    style={{
                      background: accent,
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "pulse 1.2s infinite 0.2s",
                    }}
                  />
                </span>
                Processing...
              </div>
            </div>

            {/* Solution found bubble */}
            <div className="px-5 mt-5 flex">
              <div
                className="rounded-xl bg-white py-4 px-5 flex flex-col gap-2"
                style={{
                  minWidth: 300,
                  boxShadow: "0 2px 8px 0 rgba(47,79,79,0.08)",
                  border: "1.5px solid #E5E5E5",
                }}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Scroll indicator */}
      <div
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center"
        aria-hidden="true"
      >
        <span
          style={{
            color: "#d4dbe2",
            fontSize: "1.04rem",
            fontWeight: 400,
            opacity: 0.74,
            marginBottom: 12,
            letterSpacing: "0.01em",
          }}
        >
          Explore More
        </span>
        {/* Mouse icon */}
        <svg width="34" height="48" viewBox="0 0 34 48" fill="none">
          <rect
            x="2"
            y="2"
            width="30"
            height="44"
            rx="15"
            stroke="#E5E5E5"
            strokeWidth="3.2"
            fill="none"
          />
          <circle
            cx="17"
            cy="14"
            r="3"
            fill={accent}
            style={{
              animation: "moveDown 1.6s infinite cubic-bezier(.5,1,.5,1)",
            }}
          />
          <style>
            {`
          @keyframes moveDown {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(14px); opacity: 0.55; }
            100% { transform: translateY(0); opacity: 1; }
          }
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
        </svg>
      </div>

      {/* Place modal at the end of the section for accessibility */}
      <PilotModal isOpen={pilotModal} onClose={() => setPilotModal(false)} />
    </section>
  );
};

export default HeroSection;
