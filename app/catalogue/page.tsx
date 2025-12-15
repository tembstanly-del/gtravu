"use client";

import { useState, useMemo } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";

export default function CataloguePage() {
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [conditionFilter, setConditionFilter] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesBrand =
        brandFilter === "all" || product.brand === brandFilter;
      const matchesCondition =
        conditionFilter === "all" || product.condition === conditionFilter;
      return matchesBrand && matchesCondition;
    });
  }, [brandFilter, conditionFilter]);

  const clearFilters = () => {
    setBrandFilter("all");
    setConditionFilter("all");
  };

  const hasActiveFilters = brandFilter !== "all" || conditionFilter !== "all";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface circuit-pattern py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Our Catalogue</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse our selection of premium smartphones. All devices are
            thoroughly inspected and ready for delivery across Zambia.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/catalogue/new">
              <Button
                variant="outline"
                className="border-success text-success hover:bg-success hover:text-white"
              >
                Brand New Only
              </Button>
            </Link>
            <Link href="/catalogue/refurbished">
              <Button
                variant="outline"
                className="border-warning text-warning hover:bg-warning hover:text-white"
              >
                Refurbished Only
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="container mx-auto px-4 py-8">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 p-4 rounded-lg bg-surface border border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filters</span>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Select value={brandFilter} onValueChange={setBrandFilter}>
              <SelectTrigger className="w-[160px] bg-background border-border">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="samsung">Samsung</SelectItem>
                <SelectItem value="pixel">Google Pixel</SelectItem>
              </SelectContent>
            </Select>

            <Select value={conditionFilter} onValueChange={setConditionFilter}>
              <SelectTrigger className="w-[160px] bg-background border-border">
                <SelectValue placeholder="All Conditions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="new">Brand New</SelectItem>
                <SelectItem value="refurbished">Refurbished</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-accent hover:text-accent/80"
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground mb-6">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              No products match your filters.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Can't Find What You're Looking For */}
        <div className="mt-16 p-8 rounded-xl bg-surface border border-border text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We offer a pre-order service! Tell us what phone you want, and
            we&apos;ll source it for you at competitive prices.
          </p>
          <WhatsAppButton
            message="Hi LKD Electronics! I'd like to pre-order a phone that's not in your catalogue. Can you help?"
            variant="secondary"
            size="lg"
          >
            Request a Phone
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
