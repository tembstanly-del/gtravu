import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  MessageCircle,
  FileText,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Warranty",
  description:
    "LKD Electronics warranty policy. 1-year warranty on brand new devices. Learn what's covered and how to claim.",
};

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface circuit-pattern py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-5 h-5" />
            Your Purchase is Protected
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Warranty Policy
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We stand behind the quality of our products. Every brand new device
            comes with a comprehensive 1-year warranty.
          </p>
        </div>
      </div>

      {/* Warranty Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Brand New */}
            <div className="p-8 rounded-xl bg-surface border border-success/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Brand New</h3>
                  <p className="text-success font-medium">1-Year Warranty</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                All brand new smartphones come with full 1-year warranty
                coverage against manufacturing defects.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                  Manufacturing defects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                  Hardware malfunctions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                  Battery issues (not wear)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                  Screen defects (not damage)
                </li>
              </ul>
            </div>

            {/* Refurbished */}
            <div className="p-8 rounded-xl bg-surface border border-warning/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Refurbished
                  </h3>
                  <p className="text-warning font-medium">90-Day Warranty</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Refurbished devices come with a 90-day warranty covering
                functional issues that may arise.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-warning shrink-0" />
                  Hardware malfunctions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-warning shrink-0" />
                  Battery issues below 80%
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-warning shrink-0" />
                  Software issues
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-warning shrink-0" />
                  Connectivity problems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What&apos;s Covered
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Manufacturing Defects
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Issues present from the factory
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Hardware Failures
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Spontaneous component malfunctions
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Software Issues
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      System bugs and crashes
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Display Problems
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Dead pixels, screen defects (not cracks)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Charging Issues
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Port malfunctions, charging failures
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Speaker/Mic</h4>
                    <p className="text-sm text-muted-foreground">
                      Audio component failures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Not Covered */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What&apos;s Not Covered
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Physical Damage</h4>
                    <p className="text-sm text-muted-foreground">
                      Drops, cracks, bends, or dents
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Water Damage</h4>
                    <p className="text-sm text-muted-foreground">
                      Liquid exposure or submersion
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Unauthorized Repairs
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Third-party modifications or repairs
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Normal Wear</h4>
                    <p className="text-sm text-muted-foreground">
                      Battery degradation, cosmetic wear
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Accessories</h4>
                    <p className="text-sm text-muted-foreground">
                      Chargers, cases, earphones
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Software Mods</h4>
                    <p className="text-sm text-muted-foreground">
                      Jailbreaking, rooting, custom ROMs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              How to Claim
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative">
                  <MessageCircle className="w-8 h-8 text-accent" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                    1
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Contact Us
                </h3>
                <p className="text-muted-foreground text-sm">
                  Reach out via WhatsApp with your issue and proof of purchase
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative">
                  <FileText className="w-8 h-8 text-accent" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                    2
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Assessment
                </h3>
                <p className="text-muted-foreground text-sm">
                  We&apos;ll assess the device and determine warranty eligibility
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-4 relative">
                  <CheckCircle className="w-8 h-8 text-success" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-success text-white font-bold flex items-center justify-center text-sm">
                    3
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Resolution
                </h3>
                <p className="text-muted-foreground text-sm">
                  Repair or replacement provided based on the issue
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-background border border-border">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-warning shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Important</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Keep your proof of purchase (WhatsApp chat/receipt)</li>
                    <li>• Report issues as soon as they occur</li>
                    <li>• Do not attempt to repair the device yourself</li>
                    <li>• Warranty period starts from date of purchase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary circuit-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a Warranty Claim?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us with your proof of purchase and a description of the
            issue. We&apos;ll help you get it resolved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Hi LKD Electronics! I need to make a warranty claim. My order details are..."
              variant="secondary"
              size="lg"
            >
              Start Warranty Claim
            </WhatsAppButton>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
