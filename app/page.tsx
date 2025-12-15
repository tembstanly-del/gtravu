import Link from "next/link";
import { Shield, Truck, DollarSign, Search, MessageCircle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustBadge from "@/components/TrustBadge";
import { getFeaturedProducts } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center hero-bg circuit-pattern overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <TrustBadge className="mb-6" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Smartphones.{" "}
              <span className="text-accent">Delivered Nationwide.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Apple • Samsung • Pixel
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              New & Certified Refurbished — Direct to your doorstep in Zambia
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 amber-glow-hover"
              >
                <Link href="/catalogue">
                  Browse Catalogue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <WhatsAppButton
                message="Hi LKD Electronics! I'm interested in your smartphones. What do you have available?"
                variant="outline"
                size="lg"
              >
                Order on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 border border-border">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1-Year Warranty</h3>
              <p className="text-muted-foreground">
                Full coverage on brand new devices. Shop with confidence.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Best Prices</h3>
              <p className="text-muted-foreground">
                Direct import, no middleman markup. Lower acquisition costs for you.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Nationwide Delivery</h3>
              <p className="text-muted-foreground">
                From Lusaka to your doorstep. Same-day delivery in Lusaka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Phones</h2>
              <p className="text-muted-foreground">
                Our most popular smartphones, ready for delivery
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/catalogue">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                brand={product.brand}
                condition={product.condition}
                image={product.image}
                storage={product.storage}
                whatsappMessage={product.whatsappMessage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-surface circuit-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting your dream smartphone is easy with LKD Electronics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative">
                <Search className="w-10 h-10 text-accent" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                  1
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Browse</h3>
              <p className="text-muted-foreground text-sm">
                Explore our catalogue of premium smartphones
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative">
                <MessageCircle className="w-10 h-10 text-accent" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                  2
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Chat on WhatsApp</h3>
              <p className="text-muted-foreground text-sm">
                Contact us to confirm availability and pricing
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 relative">
                <Package className="w-10 h-10 text-accent" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                  3
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">We Deliver</h3>
              <p className="text-muted-foreground text-sm">
                Pay and receive your phone at your doorstep
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2"
            >
              Learn more about our process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose LKD Electronics?</h2>
            <p className="text-muted-foreground mb-8">
              We&apos;re committed to bringing premium smartphones to Zambians at the best prices,
              backed by reliable warranties and excellent customer service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-surface border border-border">
                <h4 className="font-semibold text-white mb-1">Direct Import</h4>
                <p className="text-sm text-muted-foreground">
                  Lower costs through direct sourcing
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface border border-border">
                <h4 className="font-semibold text-white mb-1">Quality Guaranteed</h4>
                <p className="text-sm text-muted-foreground">
                  Every device is thoroughly inspected
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface border border-border">
                <h4 className="font-semibold text-white mb-1">Flexible Payment</h4>
                <p className="text-sm text-muted-foreground">
                  Mobile money, bank transfer, or cash
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface border border-border">
                <h4 className="font-semibold text-white mb-1">Pre-Order Service</h4>
                <p className="text-sm text-muted-foreground">
                  Can&apos;t find it? We&apos;ll source it for you
                </p>
              </div>
            </div>

            <WhatsAppButton
              message="Hi LKD Electronics! I'd like to learn more about your services."
              variant="secondary"
              size="lg"
            >
              Start a Conversation
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary circuit-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Your New Phone?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Browse our collection or chat with us directly. We&apos;re here to help you find the perfect device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 amber-glow-hover"
            >
              <Link href="/catalogue">Browse Catalogue</Link>
            </Button>
            <WhatsAppButton
              message="Hi LKD Electronics! I'm ready to order a phone."
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
