export interface Product {
  id: string;
  name: string;
  brand: "apple" | "samsung" | "pixel";
  condition: "new" | "refurbished";
  storage: string;
  image: string;
  featured: boolean;
  whatsappMessage: string;
}

export const products: Product[] = [
  // iPhone 16 Series (Latest)
  {
    id: "iphone-16-pro-max-256",
    name: "iPhone 16 Pro Max",
    brand: "apple",
    condition: "new",
    storage: "256GB",
    image: "/images/products/iphone-16-pro-max.svg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 16 Pro Max 256GB (Brand New). Is it available?",
  },
  {
    id: "iphone-16-pro-256",
    name: "iPhone 16 Pro",
    brand: "apple",
    condition: "new",
    storage: "256GB",
    image: "/images/products/iphone-16-pro.svg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 16 Pro 256GB (Brand New). Is it available?",
  },
  {
    id: "iphone-16-128",
    name: "iPhone 16",
    brand: "apple",
    condition: "new",
    storage: "128GB",
    image: "/images/products/iphone-16.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 16 128GB (Brand New). Is it available?",
  },
  // iPhone 15 Series
  {
    id: "iphone-15-pro-max-256",
    name: "iPhone 15 Pro Max",
    brand: "apple",
    condition: "new",
    storage: "256GB",
    image: "/images/products/iphone-15-pro-max.svg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 15 Pro Max 256GB (Brand New). Is it available?",
  },
  {
    id: "iphone-15-pro-128",
    name: "iPhone 15 Pro",
    brand: "apple",
    condition: "new",
    storage: "128GB",
    image: "/images/products/iphone-15-pro.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 15 Pro 128GB (Brand New). Is it available?",
  },
  {
    id: "iphone-15-128",
    name: "iPhone 15",
    brand: "apple",
    condition: "new",
    storage: "128GB",
    image: "/images/products/iphone-15.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 15 128GB (Brand New). Is it available?",
  },
  // Samsung Galaxy S24 Series
  {
    id: "samsung-s24-ultra-512",
    name: "Samsung Galaxy S24 Ultra",
    brand: "samsung",
    condition: "new",
    storage: "512GB",
    image: "/images/products/samsung-s24-ultra.svg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Samsung Galaxy S24 Ultra 512GB (Brand New). Is it available?",
  },
  {
    id: "samsung-s24-plus-256",
    name: "Samsung Galaxy S24+",
    brand: "samsung",
    condition: "new",
    storage: "256GB",
    image: "/images/products/samsung-s24-plus.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Samsung Galaxy S24+ 256GB (Brand New). Is it available?",
  },
  {
    id: "samsung-s24-128",
    name: "Samsung Galaxy S24",
    brand: "samsung",
    condition: "new",
    storage: "128GB",
    image: "/images/products/samsung-s24.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Samsung Galaxy S24 128GB (Brand New). Is it available?",
  },
  // Samsung Galaxy Z Series (Foldables)
  {
    id: "samsung-z-fold-6-512",
    name: "Samsung Galaxy Z Fold 6",
    brand: "samsung",
    condition: "new",
    storage: "512GB",
    image: "/images/products/samsung-z-fold-6.svg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Samsung Galaxy Z Fold 6 512GB (Brand New). Is it available?",
  },
  {
    id: "samsung-z-flip-6-256",
    name: "Samsung Galaxy Z Flip 6",
    brand: "samsung",
    condition: "new",
    storage: "256GB",
    image: "/images/products/samsung-z-flip-6.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Samsung Galaxy Z Flip 6 256GB (Brand New). Is it available?",
  },
  // Google Pixel 9 Series (Latest)
  {
    id: "pixel-9-pro-256",
    name: "Google Pixel 9 Pro",
    brand: "pixel",
    condition: "new",
    storage: "256GB",
    image: "/images/products/pixel-9-pro.svg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Google Pixel 9 Pro 256GB (Brand New). Is it available?",
  },
  {
    id: "pixel-9-128",
    name: "Google Pixel 9",
    brand: "pixel",
    condition: "new",
    storage: "128GB",
    image: "/images/products/pixel-9.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Google Pixel 9 128GB (Brand New). Is it available?",
  },
  // Google Pixel 8 Series
  {
    id: "pixel-8-pro-256",
    name: "Google Pixel 8 Pro",
    brand: "pixel",
    condition: "new",
    storage: "256GB",
    image: "/images/products/pixel-8-pro.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Google Pixel 8 Pro 256GB (Brand New). Is it available?",
  },
  {
    id: "pixel-8-128",
    name: "Google Pixel 8",
    brand: "pixel",
    condition: "new",
    storage: "128GB",
    image: "/images/products/pixel-8.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Google Pixel 8 128GB (Brand New). Is it available?",
  },
  // Refurbished Phones
  {
    id: "iphone-14-pro-max-256-refurb",
    name: "iPhone 14 Pro Max",
    brand: "apple",
    condition: "refurbished",
    storage: "256GB",
    image: "/images/products/iphone-14-pro-max.svg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 14 Pro Max 256GB (Refurbished). Is it available?",
  },
  {
    id: "iphone-13-128-refurb",
    name: "iPhone 13",
    brand: "apple",
    condition: "refurbished",
    storage: "128GB",
    image: "/images/products/iphone-13.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 13 128GB (Refurbished). Is it available?",
  },
  {
    id: "iphone-12-64-refurb",
    name: "iPhone 12",
    brand: "apple",
    condition: "refurbished",
    storage: "64GB",
    image: "/images/products/iphone-12.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 12 64GB (Refurbished). Is it available?",
  },
  {
    id: "samsung-s23-ultra-256-refurb",
    name: "Samsung Galaxy S23 Ultra",
    brand: "samsung",
    condition: "refurbished",
    storage: "256GB",
    image: "/images/products/samsung-s23-ultra.svg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Samsung Galaxy S23 Ultra 256GB (Refurbished). Is it available?",
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCondition(
  condition: "new" | "refurbished"
): Product[] {
  return products.filter((product) => product.condition === condition);
}

export function getProductsByBrand(brand: "apple" | "samsung" | "pixel"): Product[] {
  return products.filter((product) => product.brand === brand);
}

export function filterProducts(
  brandFilter?: string,
  conditionFilter?: string
): Product[] {
  return products.filter((product) => {
    const matchesBrand = !brandFilter || brandFilter === "all" || product.brand === brandFilter;
    const matchesCondition =
      !conditionFilter || conditionFilter === "all" || product.condition === conditionFilter;
    return matchesBrand && matchesCondition;
  });
}
