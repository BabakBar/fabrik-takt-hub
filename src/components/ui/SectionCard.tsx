
import React from "react";
import { cn } from "@/lib/utils";

interface SectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  floating?: boolean;
  overlapTop?: boolean;
  overlapBottom?: boolean;
  children: React.ReactNode;
  className?: string;
}

const SectionCard = React.forwardRef<HTMLDivElement, SectionCardProps>(
  ({ floating = true, overlapTop, overlapBottom, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-3xl bg-white px-8 py-8 md:px-12 md:py-12 shadow-lg transition-shadow duration-300",
        floating && "hover:-translate-y-1 hover:shadow-2xl",
        overlapTop && "lg:-mt-24 -mt-10 z-10",
        overlapBottom && "lg:-mb-24 -mb-10 z-10",
        "border border-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
SectionCard.displayName = "SectionCard";

export default SectionCard;
