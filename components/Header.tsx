"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Warranty", href: "/warranty" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
              LKD
            </span>
            <span className="text-sm font-light text-muted-foreground tracking-wider">
              ELECTRONICS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Trust Badge */}
          <div className="hidden md:flex items-center gap-2 text-success text-sm">
            <Shield className="w-4 h-4" />
            <span>1-Year Warranty</span>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-surface border-border"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">LKD</span>
                    <span className="text-xs font-light text-muted-foreground tracking-wider">
                      ELECTRONICS
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col gap-2 py-6">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-muted-foreground hover:text-white hover:bg-secondary/50 px-4 py-3 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-success px-4">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">1-Year Warranty</span>
                  </div>
                  <p className="text-sm text-muted-foreground px-4 mt-2">
                    Full coverage on brand new devices
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
