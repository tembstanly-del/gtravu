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
  {
    id: "iphone-15-pro-max-256",
    name: "iPhone 15 Pro Max",
    brand: "apple",
    condition: "new",
    storage: "256GB",
    image: "/images/products/iphone-15-pro-max.jpg",
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
    image: "/images/products/iphone-15-pro.jpg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 15 Pro 128GB (Brand New). Is it available?",
  },
  {
    id: "iphone-15-128",
    name: "iPhone 15",
    brand: "apple",
    condition: "new",
    storage: "128GB",
    image: "/images/products/iphone-15.jpg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 15 128GB (Brand New). Is it available?",
  },
  {
    id: "samsung-s24-ultra-512",
    name: "Samsung Galaxy S24 Ultra",
    brand: "samsung",
    condition: "new",
    storage: "512GB",
    image: "/images/products/samsung-s24-ultra.jpg",
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
    image: "/images/products/samsung-s24-plus.jpg",
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
    image: "/images/products/samsung-s24.jpg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Samsung Galaxy S24 128GB (Brand New). Is it available?",
  },
  {
    id: "pixel-8-pro-256",
    name: "Google Pixel 8 Pro",
    brand: "pixel",
    condition: "new",
    storage: "256GB",
    image: "/images/products/pixel-8-pro.jpg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Google Pixel 8 Pro 256GB (Brand New). Is it available?",
  },
  {
    id: "pixel-8-128",
    name: "Google Pixel 8",
    brand: "pixel",
    condition: "new",
    storage: "128GB",
    image: "/images/products/pixel-8.jpg",
    featured: false,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the Google Pixel 8 128GB (Brand New). Is it available?",
  },
  {
    id: "iphone-14-pro-max-256-refurb",
    name: "iPhone 14 Pro Max",
    brand: "apple",
    condition: "refurbished",
    storage: "256GB",
    image: "/images/products/iphone-14-pro-max.jpg",
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
    image: "/images/products/iphone-13.jpg",
    featured: true,
    whatsappMessage:
      "Hi LKD Electronics! I'm interested in the iPhone 13 128GB (Refurbished). Is it available?",
  },
  {
    id: "iphone-12-64-refurb",
    name: "iPhone 12",
    brand: "apple",
    condition: "refurbished",
    storage: "64GB",
    image: "/images/products/iphone-12.jpg",
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
    image: "/images/products/samsung-s23-ultra.jpg",
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
