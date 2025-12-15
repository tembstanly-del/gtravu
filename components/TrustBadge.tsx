import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  size?: "sm" | "default" | "lg";
  variant?: "default" | "compact";
  className?: string;
}

export default function TrustBadge({
  size = "default",
  variant = "default",
  className,
}: TrustBadgeProps) {
  const sizeClasses = {
    sm: "text-xs",
    default: "text-sm",
    lg: "text-base",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    default: "w-4 h-4",
    lg: "w-5 h-5",
  };

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 text-success",
          sizeClasses[size],
          className
        )}
      >
        <Shield className={iconSizes[size]} />
        <span className="font-medium">1-Year Warranty</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-lg px-3 py-2 text-success",
        sizeClasses[size],
        className
      )}
    >
      <Shield className={iconSizes[size]} />
      <span className="font-medium">1-Year Warranty</span>
    </div>
  );
}
