import { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Heart,
  Users,
  TrendingUp,
  Shield,
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LKD Electronics and our mission to make premium smartphones accessible to all Zambians. Founded by Lukundo G. Muhango.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface circuit-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About LKD Electronics
            </h1>
            <p className="text-muted-foreground text-lg">
              Making premium smartphones accessible to Zambians since 2024.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    LKD Electronics was founded by{" "}
                    <span className="text-white font-semibold">
                      Lukundo G. Muhango
                    </span>{" "}
                    with a simple but powerful vision: to bring premium
                    smartphones to Zambians at fair prices.
                  </p>
                  <p>
                    Having experienced firsthand the challenges of purchasing
                    quality phones in Zambia—inflated prices, lack of warranty,
                    and limited options—Lukundo set out to create a better
                    alternative.
                  </p>
                  <p>
                    Through direct import relationships and a commitment to
                    quality, LKD Electronics now offers the latest Apple,
                    Samsung, and Google devices at competitive prices, backed by
                    real warranties and excellent customer service.
                  </p>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-8 border border-border">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-accent">LGM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Lukundo G. Muhango
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-muted-foreground text-sm">
                    &quot;My goal is simple: help every Zambian access the
                    smartphone they deserve at a price they can afford, with the
                    confidence of knowing they&apos;re protected.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Mission & Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To make premium smartphones accessible to all Zambians by
                  providing quality devices at competitive prices with reliable
                  warranty coverage.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Customer First
                </h3>
                <p className="text-muted-foreground">
                  Every decision we make is guided by what&apos;s best for our
                  customers. Your satisfaction is our success.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Trust & Transparency
                </h3>
                <p className="text-muted-foreground">
                  We believe in honest business. No hidden fees, no surprises.
                  What we promise is what we deliver.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Quality Focus
                </h3>
                <p className="text-muted-foreground">
                  Every device we sell is carefully sourced and inspected. We
                  don&apos;t compromise on quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Customers Choose LKD
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Genuine Products</p>
              </div>

              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">1 Year</div>
                <p className="text-muted-foreground">Warranty Coverage</p>
              </div>

              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">24hrs</div>
                <p className="text-muted-foreground">Lusaka Delivery</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4">
                <Globe className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Direct Import
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We source directly, cutting out middlemen to bring you
                    better prices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4">
                <Users className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Personal Service
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We take time to understand your needs and find the right
                    device for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4">
                <Shield className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Warranty Backed
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Shop with confidence knowing your purchase is protected.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Nationwide Delivery
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We deliver across Zambia, bringing premium phones to your
                    doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-surface circuit-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Coming Soon
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Physical Store Opening
            </h2>
            <p className="text-muted-foreground mb-8">
              We&apos;re excited to announce that LKD Electronics will be
              opening a physical storefront in Lusaka. Stay tuned for updates on
              our grand opening, where you&apos;ll be able to see and test
              devices in person before you buy.
            </p>
            <WhatsAppButton
              message="Hi LKD Electronics! I'd like to know more about your upcoming physical store."
              variant="secondary"
            >
              Get Updates
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary circuit-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the LKD Difference?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Browse our catalogue or reach out to us directly. We&apos;re here to
            help you find the perfect smartphone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              <Link href="/catalogue">
                Browse Catalogue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <WhatsAppButton
              message="Hi LKD Electronics! I'd like to know more about your business."
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
