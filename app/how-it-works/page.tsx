import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  MessageCircle,
  CreditCard,
  Package,
  Clock,
  CheckCircle,
  ArrowRight,
  Smartphone,
  FileText,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how to order smartphones from LKD Electronics. Simple process: Browse, Chat on WhatsApp, Pay, and Receive your phone.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface circuit-pattern py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your dream smartphone from LKD Electronics is simple and
            secure. Here&apos;s everything you need to know.
          </p>
        </div>
      </div>

      {/* In-Stock Flow */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-success/20 text-success text-sm font-medium mb-4">
              In-Stock Items
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Immediate Delivery
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              For items we have in stock, you can have your phone in your hands
              within 24 hours (Lusaka) or 2-3 days (nationwide).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="relative">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-surface border border-border h-full">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative">
                  <Search className="w-8 h-8 text-accent" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                    1
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Browse</h3>
                <p className="text-muted-foreground text-sm">
                  Explore our catalogue and find your perfect phone
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-surface border border-border h-full">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative">
                  <MessageCircle className="w-8 h-8 text-accent" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                    2
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm">
                  Message us to confirm availability and get pricing
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-surface border border-border h-full">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative">
                  <CreditCard className="w-8 h-8 text-accent" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                    3
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pay</h3>
                <p className="text-muted-foreground text-sm">
                  Mobile money, bank transfer, or cash on delivery
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-surface border border-border h-full">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-4 relative">
                  <Package className="w-8 h-8 text-success" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-success text-white font-bold flex items-center justify-center text-sm">
                    4
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Receive
                </h3>
                <p className="text-muted-foreground text-sm">
                  Same-day in Lusaka, 2-3 days nationwide
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              <Link href="/catalogue">Browse In-Stock Phones</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pre-Order Flow */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-warning/20 text-warning text-sm font-medium mb-4">
              Pre-Order Service
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We can source any smartphone for you. Tell us what you want, and
              we&apos;ll make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center mb-4 relative">
                <Smartphone className="w-8 h-8 text-warning" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-warning text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Tell Us
              </h3>
              <p className="text-muted-foreground text-sm">
                Describe the phone you want (model, storage, color)
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center mb-4 relative">
                <FileText className="w-8 h-8 text-warning" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-warning text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                We Quote
              </h3>
              <p className="text-muted-foreground text-sm">
                We&apos;ll provide a competitive price and timeline
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center mb-4 relative">
                <CreditCard className="w-8 h-8 text-warning" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-warning text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                50% Deposit
              </h3>
              <p className="text-muted-foreground text-sm">
                Pay half upfront, we start procurement
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-4 relative">
                <Truck className="w-8 h-8 text-success" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-success text-white font-bold flex items-center justify-center text-sm">
                  4
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Pay & Receive
              </h3>
              <p className="text-muted-foreground text-sm">
                Pay balance on delivery and enjoy your new phone
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <WhatsAppButton
              message="Hi LKD Electronics! I'd like to pre-order a phone. Can you help me with a quote?"
              variant="secondary"
              size="lg"
            >
              Start a Pre-Order
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Payment Methods
            </h2>
            <p className="text-muted-foreground">
              We accept multiple payment options for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-surface border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-white mb-2">Mobile Money</h3>
              <p className="text-sm text-muted-foreground">
                Airtel Money & MTN Mobile Money
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-white mb-2">Bank Transfer</h3>
              <p className="text-sm text-muted-foreground">
                Direct bank deposit or transfer
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-white mb-2">Cash on Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Pay when you receive (Lusaka only)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Delivery Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-success" />
                  <h3 className="text-lg font-semibold text-white">
                    Lusaka Delivery
                  </h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Same-day delivery available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Free delivery within city center
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Cash on delivery option
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-semibold text-white">
                    Nationwide Delivery
                  </h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    2-3 business days
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Tracked courier service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Secure packaging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary circuit-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Have questions? Our team is ready to help you find the perfect phone
            and guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              <Link href="/catalogue">Browse Catalogue</Link>
            </Button>
            <WhatsAppButton
              message="Hi LKD Electronics! I have questions about how to order."
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
