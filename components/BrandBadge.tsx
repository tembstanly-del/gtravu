import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BrandBadgeProps {
  brand: "apple" | "samsung" | "pixel";
  size?: "sm" | "default";
  className?: string;
}

const brandConfig = {
  apple: {
    label: "Apple",
    bgColor: "bg-zinc-800/80",
    textColor: "text-zinc-200",
  },
  samsung: {
    label: "Samsung",
    bgColor: "bg-blue-900/80",
    textColor: "text-blue-200",
  },
  pixel: {
    label: "Pixel",
    bgColor: "bg-orange-900/80",
    textColor: "text-orange-200",
  },
};

export default function BrandBadge({
  brand,
  size = "default",
  className,
}: BrandBadgeProps) {
  const config = brandConfig[brand];

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    default: "text-xs px-2.5 py-1",
  };

  return (
    <Badge
      className={cn(
        "font-medium border-0",
        config.bgColor,
        config.textColor,
        sizeClasses[size],
        className
      )}
    >
      {config.label}
    </Badge>
  );
}
