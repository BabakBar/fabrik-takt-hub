import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import IndustryBackground from "../IndustryBackground";

const HeroSection = () => {

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <IndustryBackground />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-left max-w-4xl">
          {/* Eyebrow text following capabilities page pattern */}
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400/60 mb-3">
            {"// AI Applications for Industries"}
          </div>
          
          {/* Large typography matching capabilities page */}
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-black leading-none mb-6" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: `
              0 1px 0 rgba(255,255,255,0.1),
              0 4px 8px rgba(0,0,0,0.3),
              0 8px 16px rgba(0,0,0,0.2),
              0 0 40px rgba(255,255,255,0.05)
            `
          }}>
            Turn Chaos into<br />
            <span style={{
              background: 'linear-gradient(135deg, #ffc107 0%, #ffb300 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `
                0 1px 0 rgba(255,193,7,0.1),
                0 4px 8px rgba(0,0,0,0.3),
                0 8px 16px rgba(0,0,0,0.2),
                0 0 40px rgba(255,193,7,0.05)
              `
            }}>Clarity</span>
          </h1>
          
          {/* Simple subtitle */}
          <div className="text-center mb-8">
            <p className="text-xl md:text-xl text-gray-300 font-medium max-w-3xl mx-auto">
              Capture, structure, and retrieve operational insights instantly.
            </p>
          </div>
          
          {/* Single primary CTA */}
          <div className="text-center">
            <Link to="/capabilities">
              <Button 
                size="lg"
                className="inline-flex items-center rounded-md bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 text-lg transition-colors"
              >
                Explore Capabilities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
  {/* IndustryBackground renders the conceptual Industry 4.0 ecosystem */}
    </section>
  );
};

export default HeroSection;