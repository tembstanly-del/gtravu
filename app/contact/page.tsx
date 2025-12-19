import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact LKD Electronics via WhatsApp or phone. We're here to help you find the perfect smartphone. Based in Lusaka, Zambia.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface circuit-pattern py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have questions? We&apos;re here to help. Reach out via WhatsApp for
            the fastest response.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp - Primary */}
              <div className="md:col-span-2 p-8 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      WhatsApp (Recommended)
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      The fastest way to reach us. Get quick responses and
                      real-time updates on your order.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <WhatsAppButton
                        message="Hi LKD Electronics! I have a question."
                        variant="primary"
                        size="lg"
                      >
                        Chat Now
                      </WhatsAppButton>
                      <div className="flex items-center gap-2 text-white font-medium">
                        <Phone className="w-5 h-5" />
                        <span>0972 707 616</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-xl bg-surface border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-2xl font-bold text-accent mb-1">
                      0972 707 616
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Available during business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-xl bg-surface border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Location
                    </h3>
                    <p className="text-white font-medium mb-1">Lusaka, Zambia</p>
                    <p className="text-sm text-muted-foreground">
                      Delivery-only (Physical store coming soon)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 rounded-xl bg-surface border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Business Hours
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">8:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Saturday</p>
                      <p className="text-muted-foreground">9:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Sunday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Public Holidays</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * WhatsApp messages received outside business hours will be
                    responded to the next business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Common Inquiries
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background border border-border">
                <h4 className="font-semibold text-white mb-2">
                  Looking to buy a phone?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Browse our catalogue and find your perfect device.
                </p>
                <Link
                  href="/catalogue"
                  className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1"
                >
                  View Catalogue
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <h4 className="font-semibold text-white mb-2">
                  Need to pre-order?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Can&apos;t find what you need? We can source it for you.
                </p>
                <WhatsAppButton
                  message="Hi LKD Electronics! I'd like to pre-order a phone."
                  variant="primary"
                  size="sm"
                >
                  Start Pre-Order
                </WhatsAppButton>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <h4 className="font-semibold text-white mb-2">
                  Warranty claim?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn about our warranty policy and how to claim.
                </p>
                <Link
                  href="/warranty"
                  className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1"
                >
                  Warranty Info
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <h4 className="font-semibold text-white mb-2">
                  How does ordering work?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn about our ordering and delivery process.
                </p>
                <Link
                  href="/how-it-works"
                  className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary circuit-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you&apos;re ready to buy or just have questions, we&apos;re
            here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Hi LKD Electronics! I'm ready to order a phone."
              variant="secondary"
              size="lg"
            >
              Order Now
            </WhatsAppButton>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/catalogue">Browse Phones</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
