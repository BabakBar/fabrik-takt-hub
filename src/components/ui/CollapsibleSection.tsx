
import { useState } from "react";
import { Button } from "./button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export function CollapsibleSection({ 
  title, 
  children, 
  defaultExpanded = false,
  className 
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={cn("border rounded-xl bg-card text-card-foreground", className)}>
      <Button
        variant="ghost"
        className="w-full justify-between p-6 h-auto text-left rounded-xl"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </Button>

      {isExpanded && (
        <div className="px-6 pb-6 pt-0">
          <div className="border-t pt-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
