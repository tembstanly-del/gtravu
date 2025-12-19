import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ConditionBadgeProps {
  condition: "new" | "refurbished";
  size?: "sm" | "default";
  className?: string;
}

export default function ConditionBadge({
  condition,
  size = "default",
  className,
}: ConditionBadgeProps) {
  const isNew = condition === "new";

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    default: "text-xs px-2.5 py-1",
  };

  return (
    <Badge
      className={cn(
        "font-medium border-0",
        isNew
          ? "bg-success/20 text-success hover:bg-success/30"
          : "bg-warning/20 text-warning hover:bg-warning/30",
        sizeClasses[size],
        className
      )}
    >
      {isNew ? "Brand New" : "Refurbished"}
    </Badge>
  );
}
