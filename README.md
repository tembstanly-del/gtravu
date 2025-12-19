# LKD Electronics

Premium smartphones delivered nationwide in Zambia. A digital storefront for LKD Electronics that drives customers to WhatsApp for purchases.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Outfit & DM Sans (Google Fonts)

## Features

- Responsive design (mobile-first)
- Dark theme with premium tech minimalism aesthetic
- Product catalogue with filtering (brand, condition)
- WhatsApp integration for inquiries and orders
- SEO optimized with proper meta tags

## Pages

- `/` - Home page with hero, value props, featured products
- `/catalogue` - All products with filters
- `/catalogue/new` - Brand new phones only
- `/catalogue/refurbished` - Refurbished phones only
- `/how-it-works` - Order process explanation
- `/warranty` - Warranty policy and claims
- `/about` - Company story and mission
- `/contact` - Contact information and WhatsApp CTA

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── catalogue/         # Catalogue pages
│   ├── how-it-works/      # How it works page
│   ├── warranty/          # Warranty page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── WhatsAppButton.tsx
│   └── ...
├── data/                  # Data files
│   └── products.ts        # Product data
├── lib/                   # Utilities
│   └── utils.ts
└── public/               # Static assets
    └── images/
        └── products/     # Product images (SVG placeholders)
```

## Business Information

- **Owner**: Lukundo G. Muhango
- **WhatsApp**:
- **Location**: Lusaka, Zambia
- **Model**: Delivery-only, nationwide

## Deployment

Deploy to [Vercel](https://vercel.com) for best Next.js support:

```bash
npm run build
```

The site is optimized for Vercel deployment with static page generation.

## License

Copyright 2024 LKD Electronics. All rights reserved.
