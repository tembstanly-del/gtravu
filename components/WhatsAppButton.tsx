import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

const WHATSAPP_NUMBER = "260972707616";

export default function WhatsAppButton({
  message = "Hi LKD Electronics! I have a question.",
  variant = "primary",
  size = "default",
  className,
  children,
  fullWidth = false,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    default: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const variantClasses = {
    primary:
      "bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 amber-glow-hover",
    secondary:
      "bg-accent hover:bg-accent/90 text-accent-foreground border-0 amber-glow-hover",
    outline:
      "bg-transparent border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white",
  };

  return (
    <Button
      asChild
      className={cn(
        "font-semibold rounded-lg transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        {children || "Chat on WhatsApp"}
      </Link>
    </Button>
  );
}

export { WHATSAPP_NUMBER };
