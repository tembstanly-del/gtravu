import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductsByCondition } from "@/data/products";

export const metadata: Metadata = {
  title: "Refurbished Phones",
  description:
    "Quality certified refurbished smartphones at great prices. Apple iPhone, Samsung Galaxy available for delivery in Zambia.",
};

export default function RefurbishedPhonesPage() {
  const refurbishedProducts = getProductsByCondition("refurbished");

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
            <h1 className="text-4xl font-bold text-white">Refurbished Phones</h1>
            <div className="flex items-center gap-2 bg-warning/20 text-warning px-3 py-1 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Certified Quality
            </div>
          </div>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Premium quality at a fraction of the price. Every refurbished device
            is thoroughly tested and inspected before sale.
          </p>
        </div>
      </div>

      {/* Quality Assurance */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-surface border border-border">
            <CheckCircle className="w-6 h-6 text-warning mb-2" />
            <h4 className="font-semibold text-white mb-1">Fully Tested</h4>
            <p className="text-sm text-muted-foreground">
              Every device undergoes rigorous testing
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface border border-border">
            <CheckCircle className="w-6 h-6 text-warning mb-2" />
            <h4 className="font-semibold text-white mb-1">Cosmetic Grade</h4>
            <p className="text-sm text-muted-foreground">
              Minimal to no visible wear
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface border border-border">
            <CheckCircle className="w-6 h-6 text-warning mb-2" />
            <h4 className="font-semibold text-white mb-1">Battery Health</h4>
            <p className="text-sm text-muted-foreground">
              80%+ battery capacity guaranteed
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">
          Showing {refurbishedProducts.length} refurbished phone
          {refurbishedProducts.length !== 1 ? "s" : ""}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {refurbishedProducts.map((product) => (
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

        {/* Want New Instead */}
        <div className="mt-16 p-8 rounded-xl bg-surface border border-border text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prefer a Brand New Device?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Check out our selection of factory-sealed smartphones with full
            warranty coverage.
          </p>
          <Link href="/catalogue/new">
            <span className="inline-flex items-center gap-2 bg-success hover:bg-success/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Browse New Phones
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
