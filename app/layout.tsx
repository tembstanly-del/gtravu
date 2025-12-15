import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "LKD Electronics | Premium Smartphones in Zambia",
    template: "%s | LKD Electronics",
  },
  description:
    "Premium smartphones delivered nationwide in Zambia. Apple iPhone, Samsung Galaxy, Google Pixel - New & Certified Refurbished. 1-Year Warranty. Best Prices.",
  keywords: [
    "smartphones Zambia",
    "iPhone Zambia",
    "Samsung Zambia",
    "Google Pixel Zambia",
    "phone shop Lusaka",
    "refurbished phones Zambia",
    "LKD Electronics",
  ],
  authors: [{ name: "LKD Electronics" }],
  creator: "LKD Electronics",
  openGraph: {
    type: "website",
    locale: "en_ZM",
    url: "https://lkdelectronics.com",
    siteName: "LKD Electronics",
    title: "LKD Electronics | Premium Smartphones in Zambia",
    description:
      "Premium smartphones delivered nationwide in Zambia. Apple iPhone, Samsung Galaxy, Google Pixel - New & Certified Refurbished.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LKD Electronics - Premium Smartphones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LKD Electronics | Premium Smartphones in Zambia",
    description:
      "Premium smartphones delivered nationwide in Zambia. Apple iPhone, Samsung Galaxy, Google Pixel.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
