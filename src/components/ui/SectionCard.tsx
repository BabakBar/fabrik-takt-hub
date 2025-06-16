
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  floating?: boolean;
  overlapTop?: boolean;
  overlapBottom?: boolean;
  children: React.ReactNode;
  className?: string;
}

const SectionCard = React.forwardRef<HTMLDivElement, SectionCardProps>(
  ({ floating = true, overlapTop, overlapBottom, className, children, ...props }, ref) => {
    const cardVariants = {
      rest: { 
        y: 0, 
        scale: 1,
        boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      },
      hover: { 
        y: floating ? -4 : 0, 
        scale: floating ? 1.01 : 1,
        boxShadow: floating 
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)"
          : "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        transition: { duration: 0.2, ease: "easeOut" }
      },
      focus: {
        y: floating ? -2 : 0,
        scale: floating ? 1.005 : 1,
        boxShadow: floating 
          ? "0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 2px #F9A825, 0 0 0 4px rgba(249, 168, 37, 0.2)"
          : "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 0 0 2px #F9A825",
        transition: { duration: 0.2, ease: "easeOut" }
      }
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative rounded-3xl bg-white px-8 py-8 md:px-12 md:py-12",
          overlapTop && "lg:-mt-24 -mt-10 z-10",
          overlapBottom && "lg:-mb-24 -mb-10 z-10",
          "border border-slate-100",
          className
        )}
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        whileFocus="focus"
        tabIndex={floating ? 0 : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
SectionCard.displayName = "SectionCard";

export default SectionCard;
