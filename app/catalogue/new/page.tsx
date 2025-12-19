import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductsByCondition } from "@/data/products";

export const metadata: Metadata = {
  title: "Brand New Phones",
  description:
    "Browse our selection of brand new smartphones with 1-year warranty. Apple iPhone, Samsung Galaxy, and Google Pixel available for delivery in Zambia.",
};

export default function NewPhonesPage() {
  const newProducts = getProductsByCondition("new");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface circuit-pattern py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalogue
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-white">Brand New Phones</h1>
            <div className="flex items-center gap-2 bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              1-Year Warranty
            </div>
          </div>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Factory-sealed smartphones with full manufacturer warranty. Every
            device comes with our 1-year coverage for your peace of mind.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-muted-foreground mb-6">
          Showing {newProducts.length} brand new phone
          {newProducts.length !== 1 ? "s" : ""}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newProducts.map((product) => (
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

        {/* Pre-order CTA */}
        <div className="mt-16 p-8 rounded-xl bg-surface border border-border text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Looking for a Specific Model?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We can source any brand new smartphone for you. Just tell us what
            you need!
          </p>
          <WhatsAppButton
            message="Hi LKD Electronics! I'd like to pre-order a brand new phone. Can you help me find one?"
            variant="secondary"
            size="lg"
          >
            Pre-Order a Phone
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
