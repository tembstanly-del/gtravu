import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ConditionBadge from "@/components/ConditionBadge";
import BrandBadge from "@/components/BrandBadge";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustBadge from "@/components/TrustBadge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  brand: "apple" | "samsung" | "pixel";
  condition: "new" | "refurbished";
  image: string;
  storage?: string;
  whatsappMessage: string;
  className?: string;
}

export default function ProductCard({
  name,
  brand,
  condition,
  image,
  storage,
  whatsappMessage,
  className,
}: ProductCardProps) {
  return (
    <Card
      className={cn(
        "bg-card border-border overflow-hidden card-hover group",
        className
      )}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square bg-gradient-to-br from-secondary/50 to-background overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <BrandBadge brand={brand} size="sm" />
            <ConditionBadge condition={condition} size="sm" />
          </div>
          {/* Warranty badge for new items */}
          {condition === "new" && (
            <div className="absolute top-3 right-3">
              <TrustBadge size="sm" variant="compact" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-white text-lg leading-tight">
              {name}
            </h3>
            {storage && (
              <p className="text-muted-foreground text-sm mt-1">{storage}</p>
            )}
          </div>

          <p className="text-accent font-medium">Contact for Price</p>

          <WhatsAppButton
            message={whatsappMessage}
            variant="primary"
            size="sm"
            fullWidth
          >
            Inquire on WhatsApp
          </WhatsAppButton>
        </div>
      </CardContent>
    </Card>
  );
}
