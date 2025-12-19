import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const quickLinks = [
  { name: "Catalogue", href: "/catalogue" },
  { name: "Brand New", href: "/catalogue/new" },
  { name: "Refurbished", href: "/catalogue/refurbished" },
  { name: "How It Works", href: "/how-it-works" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Warranty", href: "/warranty" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary circuit-pattern border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">LKD</span>
              <span className="text-sm font-light text-muted-foreground tracking-wider">
                ELECTRONICS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium smartphones delivered nationwide in Zambia. Apple iPhone,
              Samsung Galaxy, Google Pixel - New & Certified Refurbished.
            </p>
            <div className="flex items-center gap-2 text-success text-sm">
              <Shield className="w-4 h-4" />
              <span>1-Year Warranty on New Devices</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>0972 707 616</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Lusaka, Zambia</span>
              </li>
            </ul>
            <div className="mt-4">
              <WhatsAppButton
                message="Hi LKD Electronics! I have a question."
                size="sm"
              >
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} LKD Electronics. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Owned by Lukundo G. Muhango
          </p>
        </div>
      </div>
    </footer>
  );
}
